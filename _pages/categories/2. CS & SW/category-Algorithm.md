---
title: "Algorithm"
permalink: Categories/Algorithm
layout: archive
author_profile: true
sidebar_custom: true
classes: wide
---

{% assign posts = site.categories.Algorithm %}
{% for post in posts %} {% include archive-single-custom.html type=page.entries_layout %} {% endfor %}