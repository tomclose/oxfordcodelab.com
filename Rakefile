task :deploy do
  begin
    puts "cd dist"
    system 'cd dist'
    puts "git add --all"
    raise unless system 'git add --all'
    puts "git commit -m 'Update published site'"
    raise unless system "git commit -m 'Update published site'"
    puts "git push"
    raise unless system "git push"
  ensure
    puts "cd .."
    system "cd .."
  end
end
