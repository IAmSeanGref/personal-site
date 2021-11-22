---
title: "Faster Time to 'Start' Makes Long Projects Easier"
date: 2021-11-21T12:03:35Z
slug: "faster-time-to-start"
description: "In this entry I discuss why I haven't written a new post in almost a month. Reducing the effort to start a task can be the key to following through and completing the work."
keywords: [efficiency, starting, productivity, project management, completion]
draft: true
tags: [productivity, project management]
math: false
toc: false
---

In this post I'll discuss how to more effectively execute long projects.

I've seen the possible issues with long, drawn out projects first hand - both as a developer and as a manager - and a few things that can help improve these situations for everyone.

Also, you may notice the almost 1-month gap in blog posts after the last one. Pretty funny considering it was about "just starting somewhere" and, despite starting, I didn't continue. Towards the end I'll discuss this more and how the tips in this post apply to my personal situation with this blog.

## The Theory Behind Tackling Long Projects

tl;dr: Shorter time to a delivery keeps everybody more engaged and produces a better outcome. Smaller but more frequent "deliverables" boost morale.

Breaking down a project into smaller timelines and deliverables helps engagement for several reasons:

-  

Framing and context can shape how we think about tasks and challenges. [some link]. The same problem may sound easy when presented one way and difficult when presented another way. These factors combined with the fact that each individual enjoys/dislikes different parts of tasks form a complex optimization problem if you want to improve the chances a project/task will be delivered well.

In order to make your team (and yourself) more effective, you must find the right way to order

## A Personal Example: Why I Didn't Keep Writing After My Last Post:

My original goal for this blog was to post twice a week, writing Tuesday and Friday evenings after work. I've got plenty of topics lined up and have a lot I could share. The problem was that even starting *felt* like more work than I wanted to invest at a given time.

The crux of the problem was my inefficient workflow. 

To write a blog post, I had to (don't judge me):

1. Open the console to my server (from DigitalOcean's droplet admin)
2. `su - my-hugo-user`
3. Navigate to the project directory
4. Run `hugo new blog/new-blog-name.md` (and sometimes look up the command)
5. Write the blog post (the thing I *want* to do) in barebones vim (an inconvenience)
6. Modify the metadata
7. Build it, proof-read it, etc.
8. Commit/push to GitHub

That might sound pretty light, but steps 1-4 *felt* like a lot of work, even though I knew it would only take a handful of minutes. This consistently put up a psychological barrier before actually writing a post. Instead, I needed a workload that let me start writing quickly so I could do the part I enjoy most first.

### Reducing Time to Start

Today I set up the project on my windows daily-driver, but just enough so I can write a post with minimal startup time. I didn't setup hugo or anything. I can edit the project files in VS Code (my favorite lightweight editor) and view the "rendered" preview side-by-side. The rest of the tasks are now back-loaded to where I'm already invested in the task and have momentum from the writing part.

Now my workflow looks like this:

1. Open VS Code (blog is default project)
2. Write the blog post!
3. Proof read it
4. Commit/push to GitHub
5. Open the console to my server
6. `su - my-hugo-user`
7. Navigate to the project directory
8. `git pull`
9. Build it, verify it's good

Looks like one more step, but I just splitting out original step 7 into two smaller chunks and did some re-ordering. It's actually about the same amount of work. And yet this seems so much more do-able to my brain!

## How This Applies More Generally

I try to use this same principle in many aspects of life, from writing music to cooking.

With music, time spent getting cables arranged and plugged in, opening programs and setting up the workstation, tuning an instrument, and more, can all mean getting *started* writing/practicing music has chore-work in the beginning. Finding ways to solve these problems (leaving cables out, default projects for programs, etc.) means getting into the fun part more quickly.

## Plans for My Blog Going Forward

One goal is to automate steps 5-9 as much as possible. I think I can do this with GitHub hooks, but I'll need some kind of listener on my server to watch and respond. This potentially leaves my server open to DDOS attacks depending on how I implement it. (Look at me, thinking I'll be well-known enough to be targeted so specifically.)

The other goal is to write at least once a week.

If you have any other tips to making starting a task easier, please let me know on twitter!