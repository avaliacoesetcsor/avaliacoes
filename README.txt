AVALIAÇÃO: Avaliação de Saúde e Segurança do Trabalho
SITE SUGERIDO: avaliacao-sst-automacao

Conteúdo do pacote:
- public/exam.html   (página da prova para alunos)
- public/admin.html  (painel do professor)
- server.js          (Node.js/Express)
- package.json
- data.json          (arquivo onde as submissões são gravadas)
- README.txt         (este arquivo)

INSTRUÇÕES RÁPIDAS (Render.com):
1) Crie uma conta gratuita em https://render.com
2) Faça upload deste projeto para um repositório no GitHub (ou faça 'git init' e conecte localmente)
   - Estrutura recomendada:
     /project-root
       |-- server.js
       |-- package.json
       |-- data.json
       |-- /public
            |-- exam.html
            |-- admin.html
3) No Render, crie um novo "Web Service" e conecte ao repositório GitHub.
   - Build command: deixe vazio
   - Start command: node server.js
4) Após o deploy, o Render irá fornecer um domínio público (ex: https://avaliacao-sst-automacao).
   - Envie o link https://YOUR-SERVICE.onrender.com/exam.html para os alunos.
   - Abra https://YOUR-SERVICE.onrender.com/admin.html e digite a senha do professor: 159357 para ver as submissões.
5) Observações:
   - As respostas e penalidades ficam salvas em data.json no servidor.
   - Para exportar, use o botão Exportar CSV no painel do admin.
   - Proteja o servidor e faça backups periódicos de data.json.
   - Para maior segurança em ambiente escolar, considere usar máquinas em modo quiosque (kiosk).

Se tiver problema no deploy eu te oriento passo a passo (posso até gerar comandos git que você cole no terminal).
