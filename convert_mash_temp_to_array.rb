require 'json'

Dir.glob('data/*.json') do |f|
  file = File.read(f)
  json = JSON.parse(file)
  mash_temp_data = json['method']['mash_temp']
  if mash_temp_data.is_a? Array
    puts 'Already an Array!'
  else
    json['method']['mash_temp'] = [mash_temp_data]
    converted_json = JSON.pretty_generate(json)
    File.write(f, converted_json)
  end
end
