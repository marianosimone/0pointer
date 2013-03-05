require_relative 'tasks/tags'

def jekyll(opts = "")
  sh "rm -rf _site"
  sh "jekyll " + opts
end

desc "Build site using Jekyll"
task :build => :tags do
  jekyll()
end

desc "Serve on Localhost with port 4000"
task :default => :build do
  jekyll("--server --auto")
end

