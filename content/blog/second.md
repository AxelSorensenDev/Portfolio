---
id: second
title: Machine Theory of Mind
description: This is my very first blog post and I'm so excited to share it with you!
date: 2023-05-23
cover: https://images.pexels.com/photos/629159/pexels-photo-629159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
tags:
  - blog
  - testing
  - new content
  - again
---

[^1]: What are these SR?

# Machine Theory of Mind
<cite class="byline">- Axel Sorensen</cite>
<br>
Hey there! And perhaps welcome back?
This time we are talking about **Machine Theory of Mind**. Before we get ahead of ourselves let's first try to understand what theory of mind (TOM) actually is. TOM refers to the knowledge that others beliefs, desires, intentions and thoughts may differ from our own. This ability is inherent to humans but doesn't begin to form before the age of 4-5. Many tests have been devised in order to measure this ability in children, for one the classical <a href="https://en.wikipedia.org/wiki/Sally%E2%80%93Anne_test" target="_blank">Sally-Anne test</a>. As with any other concept lent from psychology and applied to the field of AI, I recommend getting a good grip of the actual definition from a human perspective, before trying to argue whether these properties are present in artificial agents (but let's save that discussion for another time😉).

### Approaches to Machine Theory of Mind
So we are interested in eliciting the ability to reason about others state of mind in our AI agents. How might we go about this? Researchers at Google Deepmind present an interesting approach in their paper <a href="https://axelsorensen.github.io/Reinforcement_Learning_Visualized/" target="_blank">"Machine Theory of Mind"</a>, which much of this article will be based upon. Instead of going over the content rigorously I will present and comment on some main ideas that I found interesting.

> A salient feature of these “understandings” of other agents
is that they make little to no reference to the agents’ true
underlying structure. We do not typically attempt to estimate
the activity of others’ neurons, infer the connectivity
of their prefrontal cortices, or plan interactions with a detailed
approximation of the dynamics of others’ hippocampal
maps. A prominent argument from cognitive psychology
is that our social reasoning instead relies on highlevel
models of other agents. - **Machine Theory of Mind**

Here the researchers are referring to the "understanding" of other humans' state of mind, and argue that it isn't necessary to deduct the exact nature of the mind, but instead a more high level representation. This is an interesting point, and applied to our artificial agents, it might mean that we don't need to deduct the exact inner workings of an agent to be able to predict their future actions.

The paper formulates a meta learning task, where an observer, given a set of behavioural traces from a novel agent, is tasked with predicting that agents future behaviour. The observer is essentially "learning to learn".

> We introduce two concepts to describe components of this
observer network and their functional role. We distinguish
between a general theory of mind – the learned weights
of the network, which encapsulate predictions about the
common behaviour of all agents in the training set – and
an agent-specific theory of mind – the “agent embedding”
formed from observations about a single agent at test time,
which encapsulates what makes this agent’s character and
mental state distinct from others’. These correspond to a
prior and posterior over agent behaviour. - **Machine Theory of Mind**

In order to understand this observer network better, let's take a look at it's architecture. Figure 1 shows the ToMnet architecture as proposed by the researchers.

<figure>
    <img src="/images/architecture.png" width="400" >
    <figcaption>Figure 1: A high-level overview of the ToMnet architecture</figcaption>
</figure>

<span>There's no need to get into the nitty gritty of this architecture right away, let us start by just getting an idea of what is going on. As I understand it <eq><sup>e</sup>char</eq> is a latent embedding that characterizes an agent based on it's past trajectories, while <eq><sup>e</sup>mental</eq> uses the character embedding and the recent trajectory of the agent to learn a mental embedding. Finally these two embeddings are fed into the *prediction net* alongside the current state that the agent is in. This prediction net is then tasked with predicting the action probabilities <Svgs name="pi_hat" offset=""></Svgs>, the probabilities regarding which object will consume <Svgs name="c_hat" offset="-1"></Svgs> , and finally the succesor representations <Svgs name="SR_hat" offset="-1"></Svgs>[^1].







<figure>
    <img src="/images/train_trajectories.png" width="400" >
    <figcaption>Figure 1: A high-level overview of the ToMnet architecture</figcaption>
</figure>


<Alert title="Tangent: Goal directed agents" text="There's no need to get into the nitty gritty of this architecture right away, let us start by just getting an idea of what is going on. As I understand it"></Alert>

### Inverse Reinforcement Learning

Wait, what's this? You might have heard of reinforcement learning before. An agent carries out actions in an environment, and learns which actions are best to take in a certain situation based on the rewards it receives. If not check out this <a href="https://axelsorensen.github.io/Reinforcement_Learning_Visualized/" target="_blank">interactive visual intro to RL</a> that I made a few years back. The whole idea of reinforcement learning is to learn a policy. Given a certain state what is the best action the agent could take. In inverse reinforcement learning we flip this around. Now we are trying to predict the agents reward function by only observing its actions. This <a href="https://www.youtube.com/watch?v=h7uGyBcIeII&t=3s&ab_channel=Udacity" target="_blank">3 minute video</a> helped me understand the overall idea with a simple example.

So if you get the basic concept of inverse reinforcement learning, you might see how it could be relevant to theory of mind. We are trying to reason about other agents inner workings based on their actions. As humans we also have certain desires and beliefs that are reflected in the actions we take. We see examples of this everyday, and although we don't have direct access to the minds of our peers, we are able to make pretty educated guesses about why a person might make a certain choice. Even without knowledge of a specific persons actions, we have a strong prior (assumption) about what people usually want and do in general. This both helps us predict what a person might do given a certain goal or desire, and inversely what a persons goal might be based on their behaviour.


