FROM node:15.14.0-alpine3.10 as builder

# Skip husky on docker image
ENV HUSKY_SKIP_INSTALL=1

# Copy before the rest of the source tree. Cache optimization
COPY package.json package-lock.json ${RUNDIR}

# Install Dependencies
RUN npm ci

####################
FROM node:15.14.0-alpine3.10 as base

RUN apk add --no-cache bash

# Skip husky on docker image
ENV HUSKY_SKIP_INSTALL=1

COPY --from=builder ${RUNDIR}/node_modules ${RUNDIR}/node_modules
COPY --from=builder ${RUNDIR}/package*.json ${RUNDIR}

COPY . ${RUNDIR}

RUN npm run build

EXPOSE 8080

#####################
FROM base as localdev
CMD ["npm", "run", "dev"]