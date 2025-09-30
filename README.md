# Task Manager - Nuxt 3

[![Nuxt](https://img.shields.io/badge/Nuxt-3-blue?logo=nuxt.js)](https://nuxt.com/)
[![Pinia](https://img.shields.io/badge/Pinia-2-yellow?logo=pinia)](https://pinia.vuejs.org/)
[![Tailwind](https://img.shields.io/badge/TailwindCSS-3-blue?logo=tailwind-css)](https://tailwindcss.com/)
[![Flowbite](https://img.shields.io/badge/Flowbite-Components-purple)](https://flowbite.com/)
[![PNPM](https://img.shields.io/badge/PNPM-6-green?logo=pnpm)](https://pnpm.io/)

Um gerenciador de tarefas simples desenvolvido com **Nuxt 3**, usando **Server API**, **Services**, **Composables**, **Pinia**, **Tailwind CSS** e **Flowbite**.

---

## 🚀 Funcionalidades

* Criar, editar e deletar tarefas
* Marcar tarefas como concluídas
* Listar todas as tarefas
* Frontend estilizado com Tailwind + Flowbite

---

## 💻 Tecnologias

* Nuxt 3
* Pinia
* Tailwind CSS
* Flowbite
* Server API (Nuxt)
* PNPM

> ⚠️ Projeto sem ESLint.

---

## ⚡ Instalação

Clone o projeto e instale dependências:

```bash
git clone https://github.com/SEU_USUARIO/NOME_REPO.git
cd NOME_REPO
pnpm install
```

Rodar em desenvolvimento:

```bash
pnpm dev
```

Acesse `http://localhost:3000`.

---

## 🗂️ Estrutura do projeto

```
├─ composables/      # Funções reutilizáveis
├─ services/         # Serviços para CRUD
├─ stores/           # Stores Pinia
├─ server/api/       # Endpoints backend unificados
├─ pages/            # Páginas Nuxt
├─ components/       # Componentes Vue
├─ assets/           # Imagens e estilos
└─ nuxt.config.ts    # Configuração do Nuxt
```

---

## 📦 Scripts

* `pnpm dev` – desenvolvimento
* `pnpm build` – build produção
* `pnpm start` – rodar produção

---

## ⚡ Deploy

Pode ser publicado facilmente no **Vercel** ou em qualquer plataforma compatível com Nuxt 3.  
> A API de tarefas está centralizada em um único arquivo (`server/api/tasks.ts`) que gerencia todos os métodos (GET, POST, PUT, DELETE).

---

## ✨ Observações

* O CRUD atual **não persiste em banco de dados**. As tarefas ficam em memória apenas durante a execução do servidor.  
* Para persistência real, recomenda-se integrar um banco de dados (Ex: Supabase, PlanetScale, MongoDB Atlas).

---
