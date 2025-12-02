---
title: "Data Structure"
permalink: Categories/Data Structure
layout: archive
author_profile: true
sidebar_custom: true
classes: wide
---

{% assign posts = site.categories['Data Structure'] %}
{% for post in posts %} {% include archive-single-custom.html type=page.entries_layout %} {% endfor %}