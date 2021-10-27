---
title: "Gotta Start Somewhere"
date: 2021-10-27T00:14:12Z
slug: "gotta-start-somewhere"
description: "Good is good, but bad is better than nothing, and often a necessary first step towards good."
keywords: [motivational, management, leadership, writing]
draft: true
tags: [motivational, management]
math: false
toc: false
---

The goal of this blog post is to get you to take action faster.

Today, Andrew Huang and Rob Scallon released the [third installment](https://www.youtube.com/watch?v=pm2JcAwSPG8) of their album-in-a-day series which is aptly named "First of October" (they record it on October 1, but editing 12 hours of footage takes a few weeks).

Aside from being an entertaining, hilarious, and surprisingly heartfelt album each year, it serves as a great reminder that we have limited time. In [Rob's behind-the-scenes video](https://www.youtube.com/watch?v=gDoVGhOrM28&t=0s), you can hear them say things like "I'm not super happy with this one, but it'll have to do I think." [(25:39)](https://youtu.be/gDoVGhOrM28?t=1539) Having such a tight time constraint forces them to keep producing rather than nit-picking and perfecting the performance.

For Rob and Andrew, their time constraints are artificial and self-imposed for sake of creativity and amusement. For you and me, we only have so much time in a day, week, or year. For a corporation, there's quarterly expectations, deadlines, etc.

The point is, while we sometimes feel like we have enough time, we don't have a lot of it.

## A bad X is better than _no_ X.

###### Disclaimer: pedants and contrarians may find X which breaks this rule. [See here.](https://seangref.com/blog/gotta-start-somewhere/#from-something-bad-to-something-good)

This especially applies to plans, documents, and proposals. You may not want to publish a proposal until it is perfect, but the sooner you get people's eyes on it, the sooner they can disagree with it. Unless you're ruling with an iron fist rather than a collaborative mindset, it's more important to get conversations started than to have a perfect plan. Besides, if people are going to have opinions that influence your plan and make you re-write sections of it, why waste time perfecting everything?

Case in point, an upcoming project I'm overseeing needs a technical design, so I had encouraged a couple engineers to spend some time coming up with something. When that didn't produce any results, I tried discussing potential implementations with them in 1:1s, but they pushed back, first asking what my solution would be, and then informing me why my solution wouldn't work well with our infrastructure. Finally, I spent some time writing up a draft of a new proposal, and sent it to the engineers, who now are able to discuss, rework, and optimize the solution, and compare it to other potential solutions to find an optimal implementation. Without some tangible thing to work from, no usable work was being done.

Granted, there's a few things I could have done differently in the above situation such as communicating that this was a priority and setting explicit timelines and expectations for the engineers to come up with a solution by a certain date, but I was more concerned about getting some kind of solution than specific deadlines. The learning for me is that it's better to have something tangible to discuss. People need a starting point to orient themselves.

In addition, if I waited to send the technial proposal until I finished a fully formed and vetted solution, we probably would still be circling around without significant progress.

## If you wait until you feel ready to start, you'll never start.

I wasn't ready when I started this blog. I didn't have a good set of tooling, and I'm currently typing in vim (without any plugins). I don't even have a plan of what this blog will _be_ per se.

And yet, here we are...

Throughout my career in tech, my experiences have often felt rushed or premature. Sure, I tend to bite off more than I can chew, but even when opportunities are offered and people say I'm ready, I've never truly feel 100% prepared.

If I waited until I felt that I had acquired all the knowledge necessary to successfully be an Engineering Manager, I don't know when I would have become one. Instead, I was offered an opportunity, and I took it. I learned a lot quickly - and am still learning every day. If I just waited for "the right time," I'd be much further behind in knowledge and experience.

So yeah, you've gotta start somewhere. Just get something - anything - to start.

Disclaimer 2: yes, I proof-read this many times and nit-picked over it. And that's exactly how I went...

## From something bad to something good.

Below is a list of things that I've heard people describe as "sometimes nothing is better than something bad" and the justification.

- Alerting/Paging. Bad alerts and pages cause alert fatigue.
- Documentation (sometimes). If it's wrong and makes it take longer to figure out the truth, that can be worse than just having to ask someome.
- Security. Don't get lulled into a false sense of security. If you think a system is secure, you're more likely to make assumptions and leak data. Or in the case of Tesla's "Auto-pilot" feature, you pay less attention and then can't react quickly when a problem occurs.

However, the problem with each of these things is that somebody stopped before it got to "good." A bad _anything_ is always _bad_, but it's also a necessary step towards a refined final output.

- Alerting/Paging. For any important production system, alerting is critical to ensure users can use your product. Bad alerting can be improved (tweaking error thresholds, adding endpoints to watch, etc.) but lacking any alerts means problems likely won't get noticed unless users try to contact you.
- Documentation. Similar to alerting, bad docs may cause confusion, but lacking documentation relies on individuals to disseminate correct information. If someone leaves your company or team, there will certainly be some information that is lost forever.
- Security. Preventing SQL injection will prevent against the most obvious attacks. Still don't get lulled into a false sense of security, buit a start is a start. If Elon Musk decided to scrap auto-pilot because some people weren't using it correctly, we'd be missing out on what might be the best self-driving implementation in the future.

As it was put to me, "you don't want to do bad and then stop." But being okay with "bad" as a first step is incredibly powerful. Thanks Bill :) 

Tweet/DM me on twitter if you think of something else. I'll add it to this list.
