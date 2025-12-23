---
title: "Programmers"
permalink: /categories/programmers/
layout: archive
breadcrumb: "Programmers"
author_profile: true
sidebar_custom: true
classes: wide
---

{% assign posts = site.categories.Programmers %}
{% for post in posts %} {% include archive-single-custom.html type=page.entries_layout %} {% endfor %}

<a href="#page-title" class="back-to-top">{{ site.data.ui-text[site.locale].back_to_top | default: 'Back to Top' }} &uarr;</a>