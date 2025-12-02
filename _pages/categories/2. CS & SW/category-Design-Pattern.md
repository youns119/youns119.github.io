---
title: "Design Pattern"
permalink: Categories/Design Pattern
layout: archive
author_profile: true
sidebar_custom: true
classes: wide
---

{% assign posts = site.categories['Design Pattern'] %}
{% for post in posts %} {% include archive-single-custom.html type=page.entries_layout %} {% endfor %}