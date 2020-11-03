# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


larry = User.create({username: 'Larry', email: 'larry@stooges.com', password: 'larry'})
curly = User.create({username: 'Curly', email: 'curly@stooges.com', password: 'curly'})
moe = User.create({username: 'moe', email: 'moe@stooges.com', password: 'moe'})

video1 = Video.create({title: 'my first video', url:''})
video2 = Video.create({title: 'my second video', url:''})
video3 = Video.create({title: 'my third video', url:''})
video4 = Video.create({title: 'my fourth video', url:''})
video5 = Video.create({title: 'my fifth video', url:''})
video6 = Video.create({title: 'my sixth video', url:''})
video7 = Video.create({title: 'my seventh video', url:''})
video8 = Video.create({title: 'my eighth video', url:''})
video9 = Video.create({title: 'my ninth video', url:''})

larry.videos << [video1, video2, video3]
curly.videos << [video4, video5, video6]
moe.videos << [video7, video8, video9]

