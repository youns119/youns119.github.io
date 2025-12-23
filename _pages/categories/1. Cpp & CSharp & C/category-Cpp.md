---
title: "C++"
permalink: /categories/cpp/
layout: archive
breadcrumb: "C++"
author_profile: true
sidebar_custom: true
classes: wide
---

{% assign posts = site.categories.Cpp %}
{% for post in posts %} {% include archive-single-custom.html type=page.entries_layout %} {% endfor %}

<a href="#page-title" class="back-to-top">{{ site.data.ui-text[site.locale].back_to_top | default: 'Back to Top' }} &uarr;</a>