---
title: "C#"
permalink: /categories/csharp/
layout: archive
breadcrumb: "C#"
author_profile: true
sidebar_custom: true
classes: wide
---

{% assign posts = site.categories.CSharp %}
{% for post in posts %} {% include archive-single-custom.html type=page.entries_layout %} {% endfor %}