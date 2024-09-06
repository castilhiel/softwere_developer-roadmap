https://www.w3schools.com/git/git_intro.asp

# Git Introdução:

O que é Git:

    Sistema de controle de versões. Foi criado por Linus Torvalds em 2005, e tem sido mantido por Junio Hamano desde então.

- É usado para:

  - Rastreamento de alterações de código.

  - Acompanhando quem fez as alterações.

  - Codificação de colaboração.

- O que o Git faz?

  - Gerenciar projetos com `repositories`

  - `clone`(clonar) projetos para sua máquina e altere oque quiser pois é uma cópia.

  - Controlar e acompanhar as alterações com `staging`(status) e `committing`(commit).

  - `branch`(ramificação) e `merge`(juntar) para trabalhar com diferentes partes e versões de um projeto.

  - `pull`(pegar/receber) a última versão do projeto no meu computador.

  - `push`(enviar) atualizações feitas no meu computador para o projeto principal(repositório)

- Por que Git:

  - Mais de 70% dos desenvolvedores usam o Git.

  - Desenvolvedores podem trabalhar juntos em um projeto de qualquer lugar do mundo.

  - Os desenvolvedores podem ver o histórico do projeto.

  - Desenvolvedores podem mudar para qualquer versão do projeto.

- O que é GitHub

  - Git não é maesma coisa que Git.

  - GitHub fabrica as ferramentas que usam o Git.

  - GitHub é a maior plataforma de hospedagem de respositórios de projetos de código aberto do mundo, e foi comprado pela microsoft em 2018.

### Nota

- Clone do projeto

  - Primeiro devemos baixar o projeto com o `git clone`

- Fazer um pull:

  - Antes de subir suas alterações com git push, é importante fazer um git pull para trazer as últimas alterações feitas por outras pessoas no repositório remoto.

- Testar o código:

  - Depois de puxar as novas alterações, você deve testar seu código localmente para garantir que suas modificações funcionem bem com as mudanças que outras pessoas fizeram. Isso evita a introdução de bugs ou conflitos no projeto.

- Resolver conflitos (se houver):

  - Se houver conflitos entre as suas mudanças e as que foram feitas por outros, o Git irá avisá-lo. Você precisará resolver esses conflitos manualmente, garantindo que o código resultante esteja correto.

- Fazer um commit adicional (se necessário):

  - Após resolver conflitos ou fazer ajustes para que seu código funcione com as novas alterações, você pode precisar fazer um novo commit.

- Subir o código (push):
  - Quando você tiver certeza de que o código está funcionando corretamente com as novas mudanças, pode usar git push para enviar suas alterações ao repositório remoto.

### Exercícios

    Gerencia projetos com repositórios(repositories).

    Clona(clone) um projeto para que eu possa alterá-lo sem estragar o projeto em produção.

    Controla e rastreia mudanças com o Status(staging) e Commit(committing).

    atualiza(pull) a minha cópia local com todas as alterações feitas por outras pessoas.

    Enviar(push) as alterações local para o projeto principal.
