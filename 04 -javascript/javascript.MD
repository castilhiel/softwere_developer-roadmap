https://www.w3schools.com/js

# JAVASCRIPT home

JavaScript é a linguagem de programação da WEB.

### Exemplo da sintaxe do JavaScript:

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <button onclick="document.getElementById('demo').innerHTML = 'HTML attributes'">Clique aqui</button>
    <p id="demo"></p>
  </body>
</html>

<!-- =================================================================== -->
<!--                           OU                                        -->
<!-- =================================================================== -->

<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <button id="sendButton">Clique aqui</button>
    <p id="demo"></p>

    <script>
      const button = document.getElementById("sendButton");
      const paragraph = document.getElementById("demo");

      button.addEventListener("click", () => (paragraph.innerHTML = "eventListener"));

      // button.onclick = () => (paragraph.innerHTML = "onclick");
    </script>

    <!-- OU -->

    <!-- <script src="./main.js"></script> -->

    <!-- ERRADO ABAIXO -->
    <!-- <script src="../main.js" /> -->
  </body>
</html>

<!---
    DOMContentLoaded:

        Para garantir que o script seja executado após o carregamento do DOM.

            addEventListner('DOMContentLoaded', () => {});
-->
<!DOCTYPE html>
<html>
  <head>
    <script>
      document.addEventListener("DOMContentLoaded", () => {
        const button = document.getElementById("sendButton");
        const paragraph = document.getElementById("demo");

        button.addEventListener("click", () => (paragraph.innerHTML = "eventListener"));

        // button.onclick = () => (paragraph.innerHTML = "onclick");
      });
    </script>

    <!-- OU -->

    <!-- So o arquivo conter o DOMContentLoaded. Não há necessidade do defer -->
    <!-- <script src="./main"></script> -->

    <!-- ERRADO ABAIXO -->
    <!-- <script src="../main.js" /> -->
  </head>
  <body>
    <button id="sendButton">Clique aqui</button>
    <p id="demo"></p>
  </body>
</html>

<!-- =================================================================== -->
<!--                           OU                                        -->
<!-- =================================================================== -->

<!---
    defer:

        Para garantir que o script seja executado somente após o HTML ser completamente analizado.

            <script defer>-- Script here --</script>
-->
<!DOCTYPE html>
<html>
  <head>
    <script defer>
      const button = document.getElementById("sendButton");
      const paragraph = document.getElementById("demo");

      button.addEventListener("click", () => (paragraph.innerHTML = "eventListener"));

      // button.onclick = () => (paragraph.innerHTML = "onclick");
    </script>

    <!-- OU -->

    <!-- Se o arquivo javascript não conter o DOMContentLoaded. Adicione o defer -->
    <!-- <script defer src="./main.js"></script> -->

    <!-- ERRADO ABAIXO -->
    <!-- <script defer src="../main.js" /> -->
  </head>
  <body>
    <button id="sendButton">Clique aqui</button>
    <p id="demo"></p>
  </body>
</html>
```

# `DOMContentLoaded` x `defer`:

Tanto o evento `DOMContentLoaded` como o atributo `defer` são usados para garantir que o código javascript seja executado após o carregamento do HTML, mas eles tem diferenças importantes em termos de como e quando o código é executado.

## `DOMContentLoaded`:

- O que é:

  - É um evento que é disparado quando o documento HTML foi completamente carregado e analisado sem esperar pelo carregamento completo de estilos imagens e outros recursos externos. Isso significa que todos os elementos DOM estão disponíveis para manipulação.

- Quando usar:

  - Quando precisar executar o script(código javascript) o mais rápido possível após o DOM estar pronto, sem se preocupar com recursos externos, como imagens ou estilos.

- Exemplo:
  - ```html
    <script>
      document.addEventListner("DOMContentLoaded", () => {
        console.log("O DOM foi totalmente carregado e analizado.");
      });
    </script>
    ```

## `defer`:

- O que é:

  - Um atributo que pode ser adicionado a tag `<script>`. Quando usado ele informa ao navegador para baixar o script em segundo plano, mas só executá-lo após o HTML ter sido completamente carregado e analizado.Além disso se tiver vários scripts com `defer`, eles serão executados na ordem em que aparecem no HTML.

- Quando usar

  - Para garantir que o script seja executado após o carregamento e análise completos do documento, mas antes que o evento `load` seja disparado. É especialmente útil para script que manipulam o DOM e que devem ser carregados o mais rápido possível, mas que não precisam bloquear a analise do HTML.

- Exemplo:

  - ```html
    <script defer src="./main.js"></script>
    ```

## Resumo final:

- `defer` é melhor para scripts que precisam ser carregados em paralelo ao HTML e executados após o DOM estar pronto, sem bloquear o carregamento de outros recursos. É mais eficiente para scripts externos.

- `DOMContentLoaded` é útil para executar código que manipula o DOM assim que ele está pronto, mas sem esperar pelo carregamento completo de recursos externos. é mais eficiente para scripts internos.

### Execícios:

```html
<head>
  <script>
    document.addEventListner("DOMContentLoaded", () => console.log("achooo."));
  </script>
  <script defer ser="https://api-externa.com"></script>
</head>
<body>
  <button onclick="console.log('achooooo')">Clique aqui</button>
  <script>
    document.addEventListner("DOMContentLoaded", () => console.log("achoooo"));
  </script>
  <script defer ser="https://api-externa.com"></script>
</body>
<!-- ================================== -->
 <head>
    <script>
    document.addEventListner('DOMContentLoaded', () => console.log('achou'))
    </script>
    <script defer ser="https://api-externa.com"></script>
 </head>
 <body>
    <button onclick="console.log('achooo')">Clique aqui</button>
    <script>
        document.addEventListner('DOMContentLoaded', () => console.log('achoo'))
    </script>
    <script defer ser="https://api-externa.com"></script>
 </body>
 <!-- ================================== -->
  <head>
    <script>
    document.addEventListner('DOMContentLoaded', () => console.log('achoo'))
    </script>
    <script defer ser="https://api-externa.com"></script>
  </head>
  <body>
    <button onclick="console.log('achoo')">Clique aqui<button>
        <script>
            document.addEventListner('DOMContentLoaded', () => console.log('achoo'))
        </script>
        <script defer ser="https://api-externa.com"></script>
  </body>
  <!-- ================================== -->
   <head>
        <script>
            document.addEventListner('DOMContentLoaded' () => console.log('achoo'))
        </script>
        <script defer ser="https://api-externa.com"></script>
   </head>
   <body>
        <button onclick="console.log('achoo')">Clique aqui</button>
        <script>
            document.addEventListner('DOMContentLoaded', () => console.log('achoo'))
        </script>
        <script defer ser="https://api-externa.com"></script>
   </body>
   <!-- ================================== -->
    <head>
        <script>
            document.addEventListner('DOMContentLoaded', () => console.log('achoo'))
        </script>
        <script defer ser="https://api-externa.com"></script>
    </head>
    <body>
        <button onclick="console.log('achoo')">Clique aqui</button>
        <script>
            document.addEventListner('DOMContentLoaded', () => console.log('achoo'))
        </script>
        <script defer ser="https://api-externa.com"></script>
    </body>
```
