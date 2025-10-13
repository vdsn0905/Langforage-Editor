export function compiler(input) {
  const tokens = lexer(input);
  const ast = parser(tokens);
  return codeGenerator(ast);
}

export function runner(code, setOutput) {
  const originalLog = console.log;
  let output = "";
  console.log = (msg) => (output += msg + "\n");

  try {
    eval(code);
  } catch (err) {
    output += "⚠️ Error: " + err.message;
  }

  console.log = originalLog;
  setOutput(output);
}

function lexer(input) {
  const tokens = [];
  let current = 0;

  while (current < input.length) {
    let char = input[current];

    if (char === "/" && input[current + 1] === "/") {
      while (char !== "\n" && current < input.length) {
        char = input[++current];
      }
      continue;
    }

    if (/\s/.test(char)) {
      current++;
      continue;
    }

    if (char === '"' || char === "'" || char === "`") {
      const quoteType = char;
      let value = "";
      char = input[++current];
      while (char !== quoteType && current < input.length) {
        value += char;
        char = input[++current];
      }
      current++;
      tokens.push({ type: "string", value, quote: quoteType });
      continue;
    }

    if (/[a-zA-Z]/.test(char)) {
      let word = "";
      while (/[a-zA-Z]/.test(char)) {
        word += char;
        char = input[++current];
      }
      const keywords = ["banao", "dikhao", "yadi", "nahito"];
      tokens.push({
        type: keywords.includes(word) ? "keyword" : "identifier",
        value: word,
      });
      continue;
    }

    if (/[0-9]/.test(char)) {
      let num = "";
      while (/[0-9]/.test(char)) {
        num += char;
        char = input[++current];
      }
      tokens.push({ type: "number", value: parseInt(num) });
      continue;
    }

    if (/[+\-*%=;<>(),]/.test(char)) {
      tokens.push({ type: "operator", value: char });
      current++;
      continue;
    }

    if (char === ";") {
      tokens.push({ type: "separator", value: ";" });
      current++;
      continue;
    }
  }

  return tokens;
}

function parser(tokens) {
  const ast = { type: "Program", body: [] };

  function walk() {
    const token = tokens.shift();

    if (token?.type === "keyword" && token.value === "banao") {
      const name = tokens.shift().value;
      let value = null;
      if (tokens[0]?.value === "=") {
        tokens.shift();
        let expression = "";
        while (tokens[0] && tokens[0].value !== ";") {
          expression += parseTokenValue(tokens.shift());
        }
        value = expression.trim();
      }
      if (tokens[0]?.value === ";") tokens.shift();
      return { type: "Declaration", name, value };
    }

    if (token?.type === "keyword" && token.value === "dikhao") {
      let expression = "";
      while (tokens[0]?.value !== ";") {
        expression += parseTokenValue(tokens.shift());
      }
      if (tokens[0]?.value === ";") tokens.shift();
      return { type: "Print", expression: expression.trim() };
    }

    if (token?.type === "keyword" && token.value === "yadi") {
      let condition = "";
      while (tokens[0]?.value !== "{") {
        condition += parseTokenValue(tokens.shift());
      }
      tokens.shift(); 

      const thenBlock = [];
      while (tokens[0]?.value !== "}") {
        thenBlock.push(walk());
      }
      tokens.shift(); 

      const elseBlock = [];
      if (tokens[0]?.type === "keyword" && tokens[0].value === "nahito") {
        tokens.shift(); 
        tokens.shift(); 
        while (tokens[0]?.value !== "}") {
          elseBlock.push(walk());
        }
        tokens.shift();
      }

      return {
        type: "IfElse",
        condition: condition.trim(),
        thenBlock,
        elseBlock,
      };
    }
    return null;
  }

  while (tokens.length > 0) {
    const node = walk();
    if (node) ast.body.push(node);
  }

  return ast;
}

function codeGenerator(node) {
  switch (node.type) {
    case "Program":
      return node.body.map(codeGenerator).join("\n");
    case "Declaration":
      return `let ${node.name} = ${node.value};`;
    case "Print":
      return `console.log(${node.expression});`;
    case "IfElse":
      return `if (${node.condition}) {\n${node.thenBlock
        .map(codeGenerator)
        .join("\n")}\n} else {\n${node.elseBlock
        .map(codeGenerator)
        .join("\n")}\n}`;
    default:
      throw new Error("Unknown node type: " + node.type);
  }
}

function parseTokenValue(token) {
  if (!token) return "";
  return token.type === "string"
    ? `${token.quote}${token.value}${token.quote}`
    : token.value;
}
