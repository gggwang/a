var rule = {
	title: 'webp',
	host: 'https://v.webp.website',
	url: '/api.php?type=index&size=20&p=fypage&category=fyclass',
	detailUrl:'/api.php?type=post&id=fyid',
	searchable:0,
    quickSearch:0,
    filterable: 0,
	headers:{ 
        'User-Agent':'MOBILE_UA'
    },
	timeout:5000,
	class_name:'最新#麻豆&天美&日本&玩偶&刘玥',
	class_url:'0#麻豆-MSD&天美&日本&玩偶&刘玥',
	play_parse:true,
	lazy:"js:var html=JSON.parse(request(input));var url=html.path;if(/m3u8|mp4/.test(url)){input=url}else{input}",
	limit:6,
	一级:'json:list;title;poster;time;id',
	二级:'*',
}