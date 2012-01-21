desc 'Generate list of reading books'
task 'reading_listal' do
  puts 'Generating reading list'
  header = <<-HTML
---
layout: default
title: "Currently Reading..."
---
<h2>This is it!</h2>
<ul>
HTML
  File.open("reading.markdown", 'w+') do |file|
    file.puts header
    get_rss_items().each {|item|
       file.puts("<li>#{item.title}</li>")
    }
    file.puts "</ul>"
  end
  puts 'Done.'
end

def get_rss_items
# http://rubyrss.com/
# http://marianosimone.listal.com/rss/wanted/books/?used=Using
# http://marianosimone.listal.com/rss/owned/books/?used=Using
end
