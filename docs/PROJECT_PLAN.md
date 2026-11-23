# Premier League Application – Project Plan

## Agreed architecture

- Frontend: React and JavaScript, built with Vite.
- Backend: Node.js and Express 5.
- Database: PostgreSQL.
- Version control: Git and GitHub.
- Prediction engine: initially Node.js; Python may be introduced later if justified and approved.
- Repository: a single repository using npm workspaces, with separate frontend and backend applications.

This plan records the agreed decisions and delivery approach for Milestone 1. Outstanding product and implementation decisions are identified in the requirements and architecture documents.

## Delivery roadmap

1. Project foundation.
2. Historical Premier League database.
3. Football information application.
4. Basic prediction engine.
5. Prediction integration.
6. Prediction performance and evaluation.
7. Advanced analytics.
8. Commercial launch.

The roadmap identifies delivery milestones only; it does not, by itself, approve which product features belong in each milestone. Feature scope and allocation require product owner approval.

## Milestone 1 – Project foundation

**Deliverable:** A working React application communicating with our own Node.js/Express backend and PostgreSQL database.

Work will be delivered and reviewed in small, testable stages:

1. **Project decisions and documentation:** Identify and agree milestone acceptance criteria with the product owner, then record the agreed scope and architecture, outstanding decisions and criteria. Obtain product owner approval for significant decisions.
2. **Repository preparation:** Organise separate frontend and backend applications using npm workspaces. Define environment configuration, ESLint and supported Node version requirements; keep secrets out of Git.
3. **Backend foundation:** Establish the Express 5 application, validate configuration at startup, and provide a health endpoint, central error handling and logging.
4. **PostgreSQL foundation:** Establish and verify the database connection and a repeatable migration process. Decide the initial schema and migration approach with product owner approval where significant.
5. **Frontend/backend integration:** Connect the React application to the backend using a mock football data provider. Demonstrate the application working with the backend and PostgreSQL, while keeping the internal data model independent of any individual provider.
6. **Automated testing and verification:** Agree and run appropriate frontend, backend and integration checks, including configuration and error handling, database connectivity and migrations, and the mock-data flow. Verify the complete deliverable and document how to run it.

No real football provider integration is included in this milestone; it must wait until licensing and commercial permissions are sufficiently understood.

## Working principles and completion

- The user is the product owner and makes architectural decisions. AI agents must not make significant architectural decisions without approval.
- Changes must be reviewed and understood by the user before acceptance.
- Deliver work in small, testable stages.
- Keep the internal data model independent of any individual data provider.
- A milestone is complete only when its deliverable works, agreed tests pass, changes are committed to Git and the user has reviewed them.

## Outstanding risks and decisions

- **Data licensing:** Select a provider only after understanding permitted uses, coverage, quality, costs and contractual restrictions.
- **Historical data retention:** Determine what historical data may be stored, for how long, and what happens if a licence ends or the provider changes.
- **Commercial redistribution:** Confirm rights to display, distribute and commercially use data, including derived statistics and predictions, before integration or launch.
- **Premier League branding rights:** Establish permissions and restrictions for names, logos, trademarks and other branding before use or launch.
- **Implementation decisions:** Agree the Node version, migration tooling, initial schema, API details, testing tools, hosting and deployment approach as needed; significant architectural decisions require product owner approval.
- **Prediction methodology:** Decide the initial model and evaluation approach later; introduce Python only if justified and approved.