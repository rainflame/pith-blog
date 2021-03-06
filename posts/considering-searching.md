---
title: "Considering Searching"
date: "2020-06-14"
author: "Sydney Zheng"
summary: "We plan for our system to have many discussions going on at the same time. In a discussion, users can easily create posts which have smaller units of content called blocks."
---

We plan for our system to have many discussions going on at the same time. In a discussion, users can easily create posts which have smaller units of content called blocks.

Currently, the test object has the standard search functionality, which allows the user to query over all the blocks and posts currently in existence. However, the user will likely interact mostly with the discussion they are currently in. We imagine they would like to use the search to find blocks/posts within this ongoing discussion. Maybe they want to respond to it, or include it as support for their argument. We consider the following specific search methods:

1. A search over a library of "saved" blocks/posts. We imagine users would save block/posts they thought would be of either significant or long-term interest. We may extend the test object to allow one to save a discussion as well.
2. A search using already specified tags. In the future, we may implement auto-tagging a block/post/discussion based on its content. We will extend the test object to allow users to remove a tag from their block/post/discussion.
3. A wide-range search over blocks/posts that are outside of the current discussion but could be of notable relevance and interest.

However, our most intriguing idea for a search is a graph-based search. The discussion is represented in a summary form by a graph of concepts presented in the discussion. This graph will be visualized next to the forum/chat. As the discussion evolves and grows, the visualized network evolves and grows. For example, if the discussion begins with whales, there will be a prominent node in the network that represents "whales". Maybe the users are arguing about if whales are "cool" or "bad", and there will be a node in the network for "cool" and "bad". Later, the discussion could turn to monkeys, and everyone agrees they are "cool". The users looking at the graph at this point will see that there is a connection from "whales" to both "cool" and "bad", but from "monkeys" there is only a connection to "cool". The following figure presents this simple graph.

![](/images/061420_graph.png)

When the discussion becomes heated about which of whales and monkeys are cooler, a serious whale fan may want to query posts/blocks that emphasize why whales are cool. One intuitive way would be for them to click on the connection between "whales" and "cool" and get these relevant posts/blocks.

This network search needs to be designed carefully. It should be intuitive to both use and understand. Doing so requires a further consideration of the algorithms that underlie its construction and the interface that presents it.
