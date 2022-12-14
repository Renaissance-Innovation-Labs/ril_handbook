---
title: IT INFRASTRUCTURE/SYSTEM
sidebar: Docs
showTitle: true
---

# RIL IT Infrastructure System



> 
> **Purpose:**
> 
> To adopt and implement a robust IT infrastructure/system that supports our core business and lay the ground for Renaissance Innovation Labs’ IT Infrastructure/System policy formulation.
> 
> NOTE:
> 
> This document contains recommendations for Server Infrastructure, Technology Stack, Product Development Methodology, Communication Management and Project Management.
> 
> **1.0 Server Infrastructure**
> 
> A Virtual private server (VPS) from one of the leading cloud computing service providers on a pay as you use package. The security of the server will be provided by the VPS service provider. The server will run the most recent stable Ubuntu distribution. The server will run a Docker engine. With Docker containers the server will be able to serve different applications with different technology stacks and frameworks without having to install individual software technology on the server.
> 
> ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a94004f9-9478-4aa8-881d-32abd2104f1c/image2.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a94004f9-9478-4aa8-881d-32abd2104f1c/image2.png)
> 
> Server Infrastructure with Docker architecture
> 
> Source: https://www.docker.com/resources/what-container
> 

**2.0 Technology Stack**

> Our technology and application stack will be open to accommodate a wide variety of technology requirement of clients adopt will be project/product specific supported by Docker containers to provide self contained deployable application stacks. However, for our in-house competency development we would place emphasis on the MEAN and MERN stacks. The following are some recommended core technologies for specific project/product types
> 

**2.1 Mobile apps**

ReactNative

**2.2 Web apps/Progressive Web Apps**

MongoDB, ExpressJS, ReactJS, and NodeJS

(MERN Stack)

**2.3 Application Program Interfaces (APIs)**

NodeJS and ExpressJS

PHP

**3.0 DevOps**

The Product Development Methodology recommended is *DevOps*

**3.1 Tracking and Version Control**

> GitLab community edition will be used as source repository management system and version control system to manage project source code and implement Continuous Integration (CI) and Continuous Delivery (CD). The choice of GitLab is based on private repositories for client projects.
> 

**3.2** **Cloud Computing**

We would be using AWS for cloud computing and Continuous Delivery (CD)

[Tech Stack](https://www.notion.so/e362924689b748ea8ec0f7c878c163cf)

> **4. 0 Communication Tool**
> 
> 
> We would mainly use Slack for project communication. Other communication channels/tools can be used where a client specifies.
> 
> **5.0 Project Management Tool**
> 

Jira & GitLab Issue Tracker would be used for now