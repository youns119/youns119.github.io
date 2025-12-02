---
title: "ETC"
permalink: Categories/Etc
layout: archive
author_profile: true
sidebar_custom: true
classes: wide
---

{% assign posts = site.categories.Etc %}
{% for post in posts %} {% include archive-single-custom.html type=page.entries_layout %} {% endfor %}