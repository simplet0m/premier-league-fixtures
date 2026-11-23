# Premier League Application – Software Architecture

**Version:** 0.1 – Initial architecture  
**Status:** Proposed  
**Repository:** premier-league-fixtures

## 1. Architectural overview

The application will use a frontend/backend architecture within a single Git repository (monorepo).

The frontend and backend will be separate applications with clearly defined responsibilities. They will communicate through an API.

## 2. Technology decisions

| Area | Technology | Purpose |
|---|---|---|
| Frontend | React + JavaScript | User interface |
| Build tooling | Vite | Frontend development and builds |
| Backend | Node.js + Express 5 | Server-side application logic and API |
| Database | PostgreSQL | Persistent application data |
| Prediction engine | Initially Node.js; Python only if justified and approved | Statistical modelling and predictions |
| Repository | Single repository using npm workspaces | Separate frontend and backend applications |
| Version control | Git + GitHub | Source control and collaboration |

These technologies and the npm-workspaces repository approach are agreed. Other detailed implementation choices remain subject to product owner approval where significant.

## 3. Illustrative repository structure — not an approved implementation specification

The following is an example of one possible organization only. It is not an approved repository layout or a specification of required files, directories, layers, or implementation details.

```text
premier-league-fixtures/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   ├── public/
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   └── app.js
│   └── package.json
├── docs/
│   ├── PRODUCT_REQUIREMENTS.md
│   └── ARCHITECTURE.md
├── .gitignore
└── README.md
```

The approved repository decision is limited to one repository using npm workspaces with separate frontend and backend applications. The detailed structure above is illustrative and may change.

## 4. Illustrative frontend responsibilities

These are possible responsibilities, not an approved feature scope or implementation specification. Product features and their milestone allocation require product owner approval.

The frontend will be responsible for:
- Displaying fixtures and results.
- Displaying the Premier League table.
- Team and player information.
- Match statistics.
- Displaying match predictions.
- Handling user interaction and navigation.

The frontend will obtain application data through the backend API.

## 5. Illustrative backend responsibilities

These responsibilities and the layered organization below are examples, not an approved implementation specification. Significant architectural decisions require product owner approval.

The backend will be responsible for:
- Providing API endpoints for the frontend.
- Retrieving and processing football data.
- Protecting private API credentials.
- Applying application business logic.
- Communicating with the database.
- Integrating with the future prediction engine.

The backend will use a layered structure:

- Routes: define API endpoints.
- Controllers: handle incoming requests and responses.
- Services: contain application logic and external integrations.
- Data access: communicate with the database.

## 6. Football data integration — rights and scope decisions outstanding

Milestone 1 uses a mock football data provider for frontend/backend integration; it does not include integration with a real football provider. Later real-provider integration and the information to obtain from a provider remain subject to product owner approval.

Before real provider integration, licensing and permitted uses, historical data retention, commercial redistribution rights (including rights concerning derived statistics and predictions), costs and contractual restrictions must be sufficiently understood. Premier League names, logos, trademarks and other branding rights must be understood before use or launch. No provider or integration milestone is approved here.

The internal data model must remain independent of any individual provider, as recorded in the project plan.

## 7. Database

PostgreSQL is the agreed database technology. The initial schema and migration approach remain to be decided; significant choices require product owner approval.

The following are candidate data categories only, not an approved schema, retention policy, or product scope:
- Historical fixtures and results.
- Team and player information where appropriate.
- Historical statistics.
- Prediction records and accuracy.
- User accounts and preferences, if required.

The database schema will be designed when the initial data requirements are better understood.

## 8. Prediction engine

The prediction engine starts in Node.js. The methodology and evaluation approach remain open decisions.

Python may be introduced later only if justified and approved; it is not an agreed technology requirement.

Any prediction-engine boundaries and interfaces beyond the agreed initial Node.js approach require further design and approval as significant architectural decisions.

## 9. Milestone boundaries

The approved roadmap is: Project foundation; Historical Premier League database; Football information application; Basic prediction engine; Prediction integration; Prediction performance and evaluation; Advanced analytics; Commercial launch. This roadmap does not approve detailed feature scope or acceptance criteria for milestones beyond the foundation described here.

**Milestone 1 — Project foundation:** A working React application communicates with the project's Node.js/Express 5 backend and PostgreSQL database. The flow uses a mock football data provider, and the internal data model is independent of any individual provider. Appropriate frontend, backend and integration checks are agreed and run, including configuration and error handling, database connectivity and migrations, and the mock-data flow; the complete deliverable and run instructions are verified and documented. No real football provider integration is included.

A milestone is complete only when its deliverable works, agreed tests pass, changes are committed to Git and the user has reviewed them. The user is the product owner and makes architectural decisions; AI agents must not make significant architectural decisions without approval. Changes must be reviewed and understood by the user before acceptance.

## 10. Security principles

- Private API credentials must never be exposed in frontend code.
- Secrets must not be committed to Git.
- Backend endpoints must validate incoming data.
- Authentication and authorisation will be introduced where required.
- External integrations must handle errors safely.

## 11. Development and deployment principles

- Frontend and backend should be independently testable.
- Changes should be managed through Git.
- AI-generated changes must be reviewed and understood by the user before acceptance; significant architectural decisions require product owner approval.
- Builds and tests must pass before releases.
- Development and production environments must be separated.
- Deployment architecture will be decided at a later stage.

## 12. Outstanding decisions requiring product owner approval

The following remain open:
- MVP scope, feature priorities, and acceptance criteria for each milestone; no features beyond the Milestone 1 foundation are assigned here.
- Whether and when to integrate a real football data provider, after understanding licensing and permitted uses, historical retention, commercial redistribution, and branding rights.
- Backend hosting platform.
- Database hosting.
- Authentication approach.
- API design and specification.
- Prediction methodology and evaluation approach.
- Whether Python is justified; any introduction requires approval.
- Supported Node.js version, migration tooling, initial schema, testing tools, and deployment approach.
- Production deployment strategy.