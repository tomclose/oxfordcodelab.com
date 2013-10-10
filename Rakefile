task :deploy do
  puts "cd ./dist"
  Dir.chdir('./dist') do
    puts "git add --all"
    break unless system 'git add --all'
    puts "git commit -m 'Update published site'"
    break unless system "git commit -m 'Update published site'"
    puts "git push"
    break unless system "git push"
  end
end
