---
layout: default
title: "tagged: Blog"
syntax-highlighting: yes
---
  <h1 class="title">Blog</h1>
   
   {% for post in site.posts %}
       {% for tag in post.tags %}
           {% if tag == 'Blog'%}
               {% include post.html %}
           {% endif %}
       {% endfor %}
   {% endfor %}
