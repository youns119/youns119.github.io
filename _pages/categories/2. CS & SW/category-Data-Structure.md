---
title: "Data Structure"
permalink: /categories/data-structure/
layout: archive
breadcrumb: "Data Structure"
author_profile: true
sidebar_custom: true
classes: wide
---

{% assign posts = site.categories['Data Structure'] %}
{% for post in posts %} {% include archive-single-custom.html type=page.entries_layout %} {% endfor %}