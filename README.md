# Structure :

```
sm/
├── src/
│   ├── core/                           # Socle global
│   │   ├── config/
│   │   │   └── app.config.ts           # Chargement des variables env
│   │   ├── logging/
│   │   │   └── logger.service.ts       # Service global de logs
│   │   ├── exceptions/
│   │   │   └── app.exception.ts        # Exception générique
│   │   └── utils/
│   │       └── date.util.ts            # Exemple helper commun
│   │
│   ├── modules/
│   │   └── product/                    # Module Produit
│   │       ├── domain/                 # Domaine pur (DDD)
│   │       │   ├── entities/
│   │       │   │   └── product.entity.ts
│   │       │   ├── value-objects/
│   │       │   │   └── product-id.vo.ts
│   │       │   ├── interfaces/
│   │       │   │   └── product-repository.interface.ts
│   │       │   └── services/
│   │       │       └── product.domain-service.ts
│   │       │
│   │       ├── application/            # Cas d’usage
│   │       │   ├── dtos/
│   │       │   │   ├── create-product.dto.ts
│   │       │   │   └── update-product.dto.ts
│   │       │   ├── use-cases/
│   │       │   │   ├── create-product.use-case.ts
│   │       │   │   └── assign-task.use-case.ts
│   │       │   └── validators/
│   │       │       └── product.validator.ts
│   │       │
│   │       ├── infrastructure/         # Technique
│   │       │   ├── controllers/
│   │       │   │   └── product.controller.ts
│   │       │   ├── repositories/
│   │       │   │   └── product.repository.ts    # Implémentation TypeORM
│   │       │   └── notifications/
│   │       │      └── product-notification.adapter.ts
│   │       └── product.module.ts   # Déclaration officielle du module
│   │
│   ├── app.module.ts                   # Module racine
│   └── main.ts                         # Point d’entrée
│
├── tests/
│   ├── unit/
│   │   └── product/
│   │       └── product.use-case.spec.ts
│   └── e2e/
│       └── product.e2e-spec.ts
│
├── scripts/
│   └── seed.ts                         # Script de seed de la DB
│
├── .env.example                        # Exemple de variables env
├── package.json
├── tsconfig.json
├── nest-cli.json
└── README.md
```
