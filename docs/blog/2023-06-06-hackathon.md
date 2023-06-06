---
slug: Gardener Hackathon 2023
title: Gardener Hackathon - May 2023
authors: jensac
tags: [gardener, hackathon]
---

## TLDR;

From May 22th until 26th, the colleagues from SAP, StackIT, x-cellent, and 23 Technologies met for another Gardener hackathon. One output is another [repository](https://github.com/gardener-community/hackathon) collecting the hackathon outputs. Go ahead and checkout the repo, for a concise summary of all past hackathons and information on future hackathons.

## Another great experience with great achievements

When we met on Monday 22th, we synchronized our expectations for the week in the first place. Almost everyone agreed that having a good time together belongs to the main expectations. A few days after the hackathon, I can definitely state that we had a good and productive time together. From the social perspective, we enjoyed the fruitful discussions during lunch or dinner. From the hacking perspective, we were really fascinated by the progress made with respect to some topics which have made it to the agenda for several times before:

- Supporting pure IPv6 shoot clusters and
- Replacing the bash scripts for node provisioning with a golang-based approach.

Moreover, we were working on a more research oriented topic dealing with the deployment of "masterful clusters" aka. "autonomous shoots". Even though the final concept for "gardener-like initial clusters" was not developed during the hackathon, the collected experience with respect to this challenging task is crucial for further steps.
Besides the bigger topics mentioned above, we brought the following task close to (or even in) production:

- We moved the `machine-controller-manager` deployment responsibility to the `gardenlet`
- We introduced an `InternalSecret` resource in the Gardener API
- We replaced the `ShootState`s With data in backup buckets
- We found a concept for Garden cluster acccess for extensions in Seed clusters.

Of course, there are still open questions and not every issue was solved during this short week. Therefore, we are happy that the colleagues from x-cellent opted for organizing the next Gardener hackathon in November/December 2023.

## Conclusion

Once again, the Gardener hackathon was a great experience with great achievements for the overall project. The community work towards a "managed Kubernetes done right" service is still gathering pace which is forms a great basis for all future development.
