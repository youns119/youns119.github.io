---
title: "Programmers"
permalink: /categories/programmers/
layout: archive
breadcrumb: "Programmers"
author_profile: true
sidebar_custom: true
---

{% assign posts = site.categories.Programmers %}
{% for post in posts %} {% include archive-single-custom.html type=page.entries_layout %} {% endfor %}