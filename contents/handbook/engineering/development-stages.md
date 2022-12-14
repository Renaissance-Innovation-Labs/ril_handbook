---
title: Development Stages
sidebar: Docs
showTitle: true
---


The purpose of this document is to serve as a guide during the execution of RIL projects to avoid chaos. The product development stages are listed based on the kinds of products.


## SOFTWARE PRODUCT

1. Analysis
2. Wireframe Design
3. UI/UX Design
4. Front End Development
5. Database Design and Backend Development
6. Server Setup(Staging and Production) and Deployment
7. Quality Assurance
8. Go Live/Release

### **Analysis**

> The team involved will analyze the product to be developed, gather and analyse the business requirements of the product (BRD), and discuss with every stakeholder involved to understand the software requirement of the product and their activities. This stage of the product is primarily the work of every project stakeholder.
> 
> 
> **Docs:**
>

1. Competitive Analysis - **Project Manager**
2. Product Strategy (Vision) - **Project Manager**
3. Product Requirement Document (PRD) - **Project Manager**
4. Roadmap - **Project Manager**
5. Project Scope and Implementation Plan - **Project Manager**

## Wireframe Design

> Wireframes are an important part of building a software product as they are the foundation on which to begin building. They present a clear summary of the page layout, format, information architecture, user flow, and intended behaviors. All these pieces of information are key for other software product stakeholders. This stage of the product is the work of the Product Designer.
>
 
 1. User Goals *(as needed)*
    1. Definition
    2. Examples
    3. Potential Persona Development
2. User Task Flows (Action Level)
3. Wireframes (lofi representation)
4. Interface Design (visual design representation)
5. Prototypes (interactive representation)

### Delivery Methods
> There are three applications that are used in conjunction with developing the assets to document the human experience. Those applications are:
>

1. Avocode - Used to house and version documents
2. Adobe XD/Figma - Used to execute documents related to (user goal, task flows, wireframes and interaction design)
3. Adobe XD/Figma Invision/Principle (TBD) - Used to construct interaction prototypes to demonstrate product design to stakeholders, investors and potential users

> Asset Ecosystem Development
1. Create project within abstract to house and manage assets
2. Create project buckets within abstract (pattern libraries, product innovation, sprints specific, sketch resources)
3. Create Pattern Library
4. Create components
5. Start with Sprint and create sprint specific sketch files to be built
    1. IA
    2. VD
    3. Prototype
    
> **Docs:**

1. Wireframe Doc - **Product Designer**

## **UI/UX Design**

> Before the product is built, there has to be a visual image and feel of what the product is set to look and feel like. This is where the UI/UX Design comes in. The team involved will look through the necessary documents from the previous stages, set up a design system and develop the UI with UX flow using the recommended design tools.
> 
> 
> **Docs**: (make a folder per project/client)
> 
1. Information Architecture - **Product Designer**
2. Visual Design - **Product Designer**
3. Breakpoints (maximum 1920 down to less than 576) - Mobile forward approach
4. Style Guide-- Standards and Guidelines (Type, CTA, Library) - **Product Designer**
5. Design Guidelines - **Product Designer**
6. User Stories and Journey Map (User Flow) - **Product Team**
7. User Guides and FAQs - **Product Team**


**Frontend Development**

> The team involved will develop the UI and Implement the UX flow using the recommended technologies from the Development unit.
> 
> 
> This frontend must be on the git repo with the suffix ‘_fe’ to note that it's just the front end code
> 
> **Docs**:
> 
1. Document containing links to live pages - **Frontend Dev**

**Database Design & Backend Development**

> The team involved will design the database and develop the backend and integrate with the frontend.
> 
> 
> The project must have a migration folder for the schema with seeding if need be.
> 
> This complete project must be on another repo with the suffix ‘_full’
> 
> **Docs**:
> 
1. API documentation - **Backend Dev**

**Server Setup and Deployment**

> The team involved will setup the server needed to host the project and there must be 2 environments (staging and production).
> 
> 
> Any deployment of the project for any environment to the server must be via git.
> 
> The staging environment must be connected to git via CI/CD
> 
> **Docs**: Doc with links to the different environment and must be in the Devops folder of the Engineering Department - **Devops Team**
> 
1. **Quality Assurance**

> The team involved will test the product online across all environments, decide the new version based on the changes and other criteria and conclude if the product is good to go Live and if YES, inform the devops unit to send it live.
> 
> 
> Version all the docs prepared
> 
> **Docs:**
> 
1. Testing Documentation - **QA Team**
2. **Go Live/ Release**

> The team prepares the final release report and launches the product.
> 
> 
> **Docs:**
> 
1. Final Release Report - **Devops Team**

# **USER INTERFACE/USER EXPERIENCE**

The UI/UX Design Process is a methodology that, if followed, allows you to polish your user interfaces to be the best one possible for a product. If this process is not followed, then it may end up in a situation where you need to keep redesigning product screens every time!

The entire **UI/UX design process** is divided into 5 phases;

- Product Definition
- Research
- Analysis
- Design
- Validation

### **1. Product Definition**

Product Definition is the first phase involved in the user design process. The team responsible for this will analyse the user needs and ensure that it aligns with the goal of the product. This is a very essential phase because understanding the scope of the product happens in this phase.

### **2. Research**

Research is the most crucial element for a designer. The designing team studies how the present system works for the current client proposal. The three main functions at this stage are:

- Have an understanding of the competition.
- Making a thorough study of your existing domain.
- Going through competitor strategy to test outcomes.

The Research process should also involve an understanding of the latest UI/UX trends, design principles, and guidelines.

### **3. Analysis**

In this phase, make use of the things collected in the Research phase. With the help of the information received, create hypothetical personas, and experience maps.

- Hypothetical Personas: Creating hypothetical scenarios help the designers to know about the various persons who will be the users of your product. It allows depicting the realistic representation of the ultimate product. The design team can figure out how it is going to look after delivery.
- Experience Maps: Experience maps show the user flow within your final product. All these are done using visual representations through proper interactions with the client in the product definition phase.

### **4. Design**

In the design process, we finally end up giving life to ideas that we have collected in the above three steps. It’s time to work on the final graphics now. The design team will execute the final design in this phase.

The significant outcomes of the designing phase are:

**Sketching:** The designing phase begins with sketching. The designers usually make hand made sketches to visualize the concept with simple terms. The UX/UI designers can stick to a particular option after the sketching process.

**Creating wireframes:** A wireframe is a visual structure that depicts the page hierarchy and the elements in the product. A wireframe is a low-fidelity way of showing a design. It’s the graphic representation of an app or a website containing the most essential elements and the content. A wireframe is considered as the backbone of the product. It’s also called the skeleton of the design. It’s mostly about the overall look of the final product.

**Creating Mockups:** A mockup is a visual way of representing a product. While a wireframe mostly represents a product’s structure, a mockup shows how the product is going to look like. As opposed to a wireframe, a mockup is either a mid or high-fidelity display of design. A mockup helps you make final decisions regarding a product’s color schemes, visual style, typography. With a mockup, you can allow yourself to experiment with the visual side of the product to see what looks the best. Here again, you can ask your potential users for feedback and make the necessary changes right away. This will save you way more time than getting back and making adjustments to the UI after you have launched the product.

**Creating Prototypes:** Prototypes concentrate on the feel of the UI/UX product that one is designing. It’s more about the interaction experience. Prototypes give you the effect of a simulator.

**Creating Design Specifications:** Design specification includes user flow and task flow diagrams. It depicts the overall working and the style requirements of the UI/UX product. It describes the processes and graphical elements to create amazing user experiences.

### **5. Validation (Testing)**

Testing is the phase that determines the overall quality of the end- product. The testers make notes of the things that have to be improved and send them back to the respected team for correcting the errors.

Key testing questions:

**User Testing:** Do users need my app?

**Usability Testing**: Can users use my app?

While evaluating your final product, there are certain factors that one needs to keep in mind. They are as follows:

- Is the system user-friendly?
- Is it flexible and easy to operate?
- Does it solve the customer’s issue?
- Is it credible and attracts the users to come back every time they need our service?