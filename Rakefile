task :deploy do
  puts 'git checkout gh-pages'
  raise unless system "git checkout gh-pages"
  puts "cp -r dist/* ."
  raise unless system "cp -r dist/* ."
  puts "git add --all"
  raise unless system "git add --all"
  puts "git commit -m 'Publish site'"
  raise unless system "git commit -m 'Publish site'"
  puts "git push -f origin"
  raise unless system "git push -f origin"
  puts "git checkout master"
  raise unless system "git checkout master"
end
