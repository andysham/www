# Single entry point for dev/DevOps tooling in this repo — see the
# "Makefile: single source of DevOps tools" section of AGENTS.md.

.DEFAULT_GOAL := help

.PHONY: help
help: ## Show this help
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-16s\033[0m %s\n", $$1, $$2}'

.PHONY: install
install: ## Install dependencies
	npm ci

.PHONY: dev
dev: ## Run the Next.js dev server
	npm run dev

.PHONY: build
build: ## Build the static export (writes to out/, same as CI)
	npm run build

.PHONY: lint
lint: ## Run lint (same checks as CI)
	npm run lint
