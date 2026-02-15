---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
  .fade-in-section {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    will-change: opacity, visibility;
  }
  .fade-in-section.is-visible {
    opacity: 1;
    transform: none;
  }
</style>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in-section').forEach(section => {
      observer.observe(section);
    });
  });
</script>

<div class="fade-in-section" markdown="1">
Welcome to my homepage!

I am currently a Quantitative Researcher in Systematic Equities at [Citadel Securities](https://www.citadelsecurities.com/).

Prior to joining Citadel Securities, I obtained my Ph.D. in [Statistics and Data Science](https://statistics.wharton.upenn.edu/) at the Wharton School, University of Pennsylvania in May 2023, where I was fortunate to be advised by Professor [Zongming Ma](https://zmastat.github.io/). My research interests include high dimensional statistics as well as differential privacy and deep learning. I am also interested in the intersection of AI and bioinformatics.

I obtained the Bachelor of Art (B.A.) in Mathematics and the Master of Mathematics (M.Math.) Degrees from the [University of Cambridge](https://www.cam.ac.uk/) before attending the Wharton School. I was advised by Professor [Rajen Shah](http://www.statslab.cam.ac.uk/~rds37/) on research in high dimensional statistics. 


Research Interests
------
* High Dimensional Statistics
* Neuroscience
* Differential Privacy
* Single-cell Biology
* Deep Learning and Machine Learning Theory



Contact Information
------
* Email: gaosheng0321 *at* gmail *dot* com
