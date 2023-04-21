var rule = {
    title:'爱污传媒',
    host:'https://www.aiwutube.live',
    url:'/index.php/&m=vodtype/fyclass/page/fypage.html',
    headers:{ 
        'User-Agent':'MOBILE_UA'
    },
    searchable:0,
    quickSearch:0,
    filterable: 0,
    timeout:5000,
    class_name:'麻豆原创&原创伙伴&节目企划&免费视频区',
    class_url:'mdapp1&mdapp2&mdapp3&mdapp72',
    limit:6,
    play_parse:true,
	lazy:"js:var html=JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);var url=html.url;if(html.encrypt=='3'){url=base64Decode(url.replace('12345','='))}else if(html.encrypt=='2'){url=unescape(base64Decode(url))}if(/m3u8|mp4/.test(url)){input=url}else{input}",
    一级:'.cell.video;a&&title;img&&src;.video-duration&&Text;a&&href',
    二级:'*',
	
}