---
title: Finza
sidebar: Handbook
showTitle: true
---

## Overview

Individuals (Nigerians) and businesses in the United States and Canada who have the need to send money to Nigeria still face difficulties doing that. Many still rely on Remittance Service Providers (RSPs) regardless of the high transansaction fees and poor exchange rates.

Nigerians who have the need to do international transactions still encounter difficulties as well because of the daily transaction limits on their USD cards or USD virtual cards.

Finza is an international fund transfer platform that sends funds from the US/Canada to Nigeria within 5 minutes and also a USD virtual card platform that processes international transactions easily and smoothly in seconds.

This product will create a seamless experience around remittance and online transactions.

##	Project Team/ Stakeholders

- Product Owner 	- Olukayode Akinkugbe
- Product Manager	 - 
- Technical Lead	 - 
- UI/UX Designer 	 - Ekene
- Frontend Developer - 
- Backend Developer  - 
- Project Manager       - 


## Target Users
This section answers the questions; WHO are we designing for? WHAT will they do with the product? WHEN will they use the product? HOW will they access the product? [All pertaining to their specific use case].

- WHO 
  - Individuals

- WHAT 
  - Receive payments
  - Make payments
  - Keep track of all transactions

- HOW
  - Web Platform
  - Mobile App

- WHEN
  - Each time they want to send funds to a Nigerian account


##	Problem and Solution
We realized that Nigerians and businesses in the diaspora face a lot of difficulties sending funds to Nigeria. It takes up to 24 hrs for payment confirmation, also at a poor exchange rate and high transaction costs. 

The US and Canada are home to a large Nigerian community who are  looking for the best possible means to send money ‘home’.  A good number of companies who hire Nigerian freelancers and creatives also face the challenge with immediate payment.

In order to build an effective solution, we looked at the current available processes and carved a pathway that reduces delay in fund transfer by making the swys wallet apis serve as a payment gateway.

We built Finza to provide individuals and businesses with a platform where they can seamlessly do the following:

- Make payments with ease to Nigeria from USA and Canada
- Receive payments with ease from USA and Canada to Nigeria.
- Fund wallet, view balance and all transactions history 
- Export all transactions to Excel. CSV and PDF. 

In a nutshell, we help individuals and businesses by providing them with the easiest and most reliable payments solution and we’ll continue to innovate so that our customers will have the experience they can’t get elsewhere.


## Core User Stories
As a User, I want to:

- Set up my account quickly and easily.
- Be able to make payments easily and fast directly to a Nigerian bank account from USA and Canada
- Be able to receive payments easily and fast from Nigeria directly to a USA or Canada - bank account
- Make a payment by entering the account details directly.
- Create and fund virtual dollar card for online transaction worldwide
- Be able to transfer funds to other users in any of the available currencies
- Be able to automate recurring payments
- Save beneficiaries account details 
- Make multiple payments at once
- Keep track of all transactions
- View my balance and transaction history in dollars and naira
- Be able to export transaction history to Excel, CSV or PDF format
- Connect my bank account so that I can move money in and out of Finza


## Competitors 

###	WorldRemit

WorldRemit is an online money transfer business enabling customers to send money to family and friends using various payment options. 

Its large number of corridors makes it a good choice for people wanting to send money to several countries, and, importantly, it is also available in many more countries than a lot of its competitors, especially in Africa, the Gulf states, and Latin America. 

Easy to use and helpful during the transfer process, it's also a good choice for people who might be less familiar with the remittance process.

**Pros:**
- Wide presence-money can be sent to over 140 countries
- Various payment options such as bank transfer, debit card, credit card and others
- Various delivery options-bank transfer (some countries), cash pickup, airtime top up and mobile wallet
- Quick transfers

**Cons:**
- Opening of account takes time
- 35% of fees are hidden in the exchange rate margin.


### Remitly

Remitly is an international payments company that leverages digital channels, including mobile phones, to send money internationally. 
Remitly's digital products are far more convenient for customers to send money across borders.

**Pros:**
- Fast and easy to use
- Large number of destinations available around the globe;
- Offers a variety of pay-in and pay-out options.


**Cons:**
- Limits on large transfers to certain destinations
- Complex transfer fees
- Poor customer service



###	Barter by flutterwave

Barter by Flutterwave is a lifestyle payments solution used by over 500,00 people to send money to and from Africa for free, receive money from abroad, create virtual cards for online shopping, pay bills and make instant payments online.

**Pros:**
- Easy to use

**Cons:**
- Poor customer system
- Bad experience with virtual cards (Naira and Dollar) - keeps declining
- Poor user interface
- Bad verification system
- High exchange rate


## Competitive Advantage

- Faster transactions
- Lower transaction costs
- Additional value of N30 - N40 on every dollar sent to Nigeria
- Carry out transactions and make purchases using our dollar virtual card
- Perform up to $5,000 daily transaction with our virtual card
- Very simple and easy user interface and experience








<!-- 

# Discoveries

As we improve our Product, it's key to have a guiding metric that we can all at Product & Engineering rally behind and measure our progress against. For the Product, this metric is **Discoveries**. The metric can be tracked in the [product dashboard][dashboard] and is reported weekly at PostHog News.

> 💡 Discoveries is different from Discovered Learnings. Discovered Learnings is used as a metric for activation and growth.

Generally, small teams should be making measurable impact towards improving this metric (not all teams, not all the time). It's okay for epics and sprints to have other intermediate (and probably more concrete) goals, but overall each team should be moving the metric as a whole.

## What is a Discovery?
The metric is defined [in this action][action]. The concept of the metric is users driving insights from PostHog, so any of these actions:
- Analyzing any insight. Analyzing means viewing for 10 seconds or more. Insights include: trends, funnels, paths, lifecycle, stickiness.
- Analyzing a recording. Watching a recording for 10 seconds or more.
- Analyzing a correlation analysis report. Analyzing means viewing for 10 seconds or more. 
- Analyzing a dashboard. Analyzing means viewing a dashboard for 10 seconds or more. Viewing a dashboard does not fire "insight analyzed" events for its dashboard items. _Introduced on Feb 21, 2022._


**Adding new insights**
We're continuously improving the product and it's inevitable that we'll add more more insights. When we add more insights, they should either fire the already existing "insight viewed" & "insight analyzed" events (with adjusted properties), or the new event should be added to the action definition. In either case, it's important to **update this document, so we have a clear log of when new insights were added.**


**Exclusions**
We exclude the following events from counting as they don't signal getting actual value from PostHog:
- Events done on test projects.
- Insights where it's the first component load (i.e. you just open the insights page and don't change any config nor move to any other insight).
  - Indirectly, this means we also don't count when a user shares an insight link and just opens that link. This is deliberate as we believe this is not about discovering a new insight, but rather collaboration.


## Additional context
- The metric is purposefully kept simple to make it easy to action and avoid complex edge cases in an already ambiguous landscape (product changes all the time).
- Why not _Discovered Learnings_? It seems to have a higher correlation to retention, but:
  - It limits us only to trends and funnels, and users drive value from a variety of other sources. We're particularly investing in providing more value in others parts of the app too.
  - While Discovered Learnings seems to lead to higher levels of retention percentually, in absolute numbers we retain more users through Discoveries (1).
  - Counts when users open an insight shared by another user (direct link).
- Caveat: This metric also captures any value from Marketing efforts. As we start to invest more in user acquisition, we'll need to isolate the effect from Marketing in this Product metric.


(1): _A test carried out on Oct 6 with cohorts from Aug 8 to Aug 29, 2021 revealed that Discoveries show 2.3x more retained users (in absolute numbers) and had an F1-score 33% higher than for Discovered Learnings._

[dashboard]: https://app.posthog.com/dashboard/14719
[action]: https://app.posthog.com/action/10784 -->
