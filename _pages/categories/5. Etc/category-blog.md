---
title: "Blog"
permalink: /categories/blog/
layout: archive
breadcrumb: "Blog"
author_profile: true
sidebar_custom: true
---

{% assign posts = site.categories.Blog %}
{% for post in posts %} {% include archive-single-custom.html type=page.entries_layout %} {% endfor %}