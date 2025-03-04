import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spin from './Spin';
import PropTypes from 'prop-types'
export default class News extends Component {
  static defaultProps = {
    country:'in',
    pageSize:8 ,
    category:'everything'
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number, 
    category:PropTypes.string,
  }
    articles=[
        {
        "source": {
        "id": null,
        "name": "MLB.com"
        },
        "author": "AJ Cassavell",
        "title": "Padres' star infielders topple Shohei Ohtani - MLB.com",
        "description": "SAN DIEGO -- The Padres do not have an All-Star infielder in 2023, which is strange, they’ll tell you, because they feel Ha-Seong Kim has been plenty worthy.\nAnd maybe he has been. (More on Kim later.) But the real reason it’s strange? The Padres employ Manny…",
        "url": "https://www.mlb.com/news/padres-star-infielders-topple-shohei-ohtani",
        "urlToImage": "https://img.mlbstatic.com/mlb-images/image/upload/t_2x1/t_w1536/mlb/ct3plzxlibnitypy6bwn.jpg",
        "publishedAt": "2023-07-05T20:16:53Z",
        "content": "SAN DIEGO -- The Padres do not have an All-Star infielder in 2023, which is strange, theyll tell you, because they feel Ha-Seong Kim has been plenty worthy.\r\nAnd maybe he has been. (More on Kim later… [+4047 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Des Moines Register"
        },
        "author": "Stephen Gruber-Miller",
        "title": "Gov. Kim Reynolds calls legislative special session to pass new Iowa abortion restrictions - Des Moines Register",
        "description": "Gov. Kim Reynolds suffered a defeat at the Iowa Supreme Court last month when the court deadlocked on a 6-week abortion ban, blocking the law.",
        "url": "https://www.desmoinesregister.com/story/news/politics/2023/07/05/kim-reynolds-calls-legislature-special-session-july-10-new-iowa-abortion-law-restrictions/70378574007/",
        "urlToImage": "https://www.desmoinesregister.com/gcdn/presto/2023/05/01/PDEM/8d2dc2d4-ea44-40e5-a64c-7bfcc685fb89-2ZB05501.jpg?crop=6337,3565,x0,y666&width=3200&height=1801&format=pjpg&auto=webp",
        "publishedAt": "2023-07-05T19:36:38Z",
        "content": "Gov. Kim Reynolds is calling lawmakers back to the Iowa Capitol for a rare special session to pass new abortion restrictions after suffering a defeat at the Iowa Supreme Court last month.\r\nReynolds, … [+5357 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "NBCSports.com"
        },
        "author": "Mike Florio",
        "title": "Josh Allen made an important disclosure regarding the Stefon Diggs drama - NBC Sports",
        "description": "Bills quarterback Josh Allen recently asked the media to stop talking about last month's drama with receiver Stefon Diggs.",
        "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/josh-allen-made-an-important-disclosure-regarding-the-stefon-diggs-drama",
        "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/dc8400a/2147483647/strip/true/crop/4263x2398+768+356/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.amazonaws.com%2Fbrightspot%2F5d%2Ffd%2F86c179e14e80b9c67fe6e1ac423d%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F1244092170",
        "publishedAt": "2023-07-05T18:48:04Z",
        "content": "Bills quarterback Josh Allen recently asked the media to stop talking about last months drama with receiver Stefon Diggs. In talking about why the media shouldnt talk about it, Allen talked about som… [+2171 chars]"
        },
        {
        "source": {
        "id": "usa-today",
        "name": "USA Today"
        },
        "author": "Kate Perez",
        "title": "Subway restaurants get deli slicers, new sandwich options on menus - USA TODAY",
        "description": "Subway will now offer freshly sliced deli meat sandwiches in U.S. restaurants after putting over 20,000 meat slicers various locations.",
        "url": "https://www.usatoday.com/story/money/food/2023/07/05/subway-deli-slicers-new-sandwiches/70383873007/",
        "urlToImage": "https://www.usatoday.com/gcdn/presto/2023/07/05/USAT/8e666037-769e-4e44-8830-378d5fb8b888-w5w9cmRA.jpeg?crop=511,288,x0,y153&width=511&height=288&format=pjpg&auto=webp",
        "publishedAt": "2023-07-05T18:46:19Z",
        "content": "Sandwich lovers will now have the option to have freshly sliced deli meats at Subway restaurants after the company began putting meat slicers in U.S. locations.\r\nSubway announced the updates on Wedne… [+2791 chars]"
        },
        {
        "source": {
        "id": "cbs-news",
        "name": "CBS News"
        },
        "author": "Elizabeth Napolitano",
        "title": "UPS workers edge closer to strike as union negotiations stall - CBS News",
        "description": "Teamsters Union and UPS have failed to agree a deal on a new contract that would cover 340,000 workers.",
        "url": "https://www.cbsnews.com/news/ups-strike-teamsters-union-negotiations-stall/",
        "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/06/29/18e66fce-ae48-4b45-81cc-8c0649684841/thumbnail/1200x630/0117a82c5c4b99574d107691c74f0bef/screenshot-2023-06-29-at-2-26-25-pm.png?v=46148a329842187f630d57e5930d74c4",
        "publishedAt": "2023-07-05T18:14:00Z",
        "content": "The Teamsters Union and UPS on Wednesday accused each other of abandoning labor negotiations aimed at averting what would be the largest strike in the U.S. since the 1950s.\r\nThe union, which represen… [+2813 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "New York Daily News"
        },
        "author": "Sheetal Banchariya, Thomas Tracy, Peter Sblendorio",
        "title": "Leandro De Niro Rodriguez checked into Cipriani last month, doorman says: 'He was a nice chap' - New York Daily News",
        "description": "Robert De Niro’s late grandson, Leandro De Niro Rodriguez, checked into Cipriani Wall Street’s residential space last month, a doorman told the Daily News.",
        "url": "https://www.nydailynews.com/snyde/ny-leandro-de-niro-rodriguez-cipirani-robert-de-niro-20230705-jxkw3depb5fzljmajnwbpocj3u-story.html",
        "urlToImage": "https://www.nydailynews.com/resizer/mMwADymBTyeBUYidHQQDjgbt238=/1200x630/filters:format(jpg):quality(70):focal(322x318:332x328)/cloudfront-us-east-1.images.arcpublishing.com/tronc/4NQA24BJ5FHWJLXGBRJ46TSUGE.jpg",
        "publishedAt": "2023-07-05T17:43:48Z",
        "content": "Robert De Niros late grandson, Leandro De Niro Rodriguez, checked into Cipriani Wall Streets residential space last month, a doorman told the Daily News.\r\nBrian Fernandes, a doorman for Ciprianis bal… [+2340 chars]"
        },
        {
        "source": {
        "id": "ars-technica",
        "name": "Ars Technica"
        },
        "author": "Chuong Nguyen",
        "title": "Dealmaster: Amazon’s early Prime Day 2023 deals continue, Star Wars savings, and more - Ars Technica",
        "description": "Get deals on laptops and discounts on gear for your home.",
        "url": "https://arstechnica.com/shopping/2023/07/dealmaster-amazons-early-prime-day-2023-deals-continue-star-wars-savings-and-more/",
        "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2022/10/prime-day-dm-760x380.jpg",
        "publishedAt": "2023-07-05T17:26:41Z",
        "content": "8 with \r\nPrime Day is less than a week away. Amazon's semi-annual sale officially kicks off next Tuesday, July 11, and will last through July 12. If you're looking to score some of the year's best de… [+11764 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "Dalton Del Don",
        "title": "2023 Fantasy Football Notebook: Christian Watson hype opens door for bust potential - Yahoo Sports",
        "description": "Dalton Del Don examines two young receivers, one getting too much fantasy hype and another being overlooked in early drafts.",
        "url": "https://sports.yahoo.com/2023-fantasy-football-notebook-christian-watson-hype-opens-door-for-bust-potential-165755281.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/eq6KcvZF6E.ugVEqZ4lsGg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-07/80d29030-1b54-11ee-a5ff-a836a1562a70",
        "publishedAt": "2023-07-05T17:12:07Z",
        "content": "Fantasy football analyst Dalton Del Don analyzes some key figures with 2023 NFL training camps just a few weeks away.\r\nWatson was highly impressive during a dominant rookie campaign (after a rough st… [+4020 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MacRumors"
        },
        "author": "Juli Clover",
        "title": "Apple Seeds Third Betas of iOS 17 and iPadOS 17 to Developers - MacRumors",
        "description": "Apple today seeded the third betas of upcoming iOS 17 and iPadOS 17 updates to developers for testing purposes, with the software coming two weeks...",
        "url": "https://www.macrumors.com/2023/07/05/apple-seeds-ios-17-beta-3-to-developers/",
        "urlToImage": "https://images.macrumors.com/t/1Cc_6-HuM2hg4Hv1uAHdxCnrywY=/2500x/article-new/2023/01/iOS-17-Icon-Mock-Feature-Feature.jpg",
        "publishedAt": "2023-07-05T17:10:09Z",
        "content": "Apple today seeded the third betas of upcoming iOS 17 and iPadOS 17 updates to developers for testing purposes, with the software coming two weeks after the release of the second betas.\r\nRegistered d… [+2585 chars]"
        },
        {
        "source": {
        "id": "usa-today",
        "name": "USA Today"
        },
        "author": ", USA TODAY",
        "title": "Fukushima water release plan from Japan approved by UN - USA TODAY",
        "description": "The water was first contaminated in 2011, when parts of the Fukushima nuclear plant were destroyed by a massive earthquake and tsunami.",
        "url": "https://www.usatoday.com/story/news/world/2023/07/05/fukushima-water-release-2023/70382604007/",
        "urlToImage": "https://www.gannett-cdn.com/presto/2023/03/11/USAT/ce342d31-bc25-44af-9711-ba2c9089ff0f-AP_Japan_Tsunami_Anniversary.jpg?auto=webp&crop=3967,2232,x0,y201&format=pjpg&width=1200",
        "publishedAt": "2023-07-05T17:07:20Z",
        "content": "Twelve years after an earthquake and tsunami destroyed parts of the Fukushima nuclear plant and contaminated water supplies, the United Nations has approved Japan's highly anticipated waste disposal … [+4773 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Space.com"
        },
        "author": "Keith Cooper",
        "title": "Time appeared to move 5 times more slowly in 1st billion years after Big Bang, quasar 'clocks' reveal - Space.com",
        "description": "Time dilation, brought about by the relativistic expansion of space, has resulted in the observed slowing of 'clocks' in the early universe.",
        "url": "https://www.space.com/quasar-clocks-universe-time-dilation",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/pzxeNB5UmrdU9cjCzyRLEd-1200-80.jpg",
        "publishedAt": "2023-07-05T17:00:00Z",
        "content": "Time has been observed passing more slowly in quasars in the early universe.\r\nThe observed time dilation comes as a consequence of Albert Einstein's theory of general relativity\r\n combined with the e… [+4219 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Alia Shoaib",
        "title": "Drones easily spotted Russian arms dump near a city where piles of ammo were lying in the open. Ukraine bombed it, causing massive explosions, video shows. - Yahoo News",
        "description": "Videos appear to show Ukraine bombing an unconcealed Russian ammo depot close to the occupied city of Makiivka, setting off spectacular explosions.",
        "url": "https://www.businessinsider.com/video-dramatic-explosions-ukraine-appears-strike-russian-ammo-depot-2023-7",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Uvsocnzepunz58.DAhhGdQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05MDA-/https://media.zenfs.com/en/business_insider_articles_888/2f499eebd34ab01f4c5c29347f787981",
        "publishedAt": "2023-07-05T16:30:31Z",
        "content": "A still from the video appearing to show Ukraine striking a Russian ammunition storage center in the occupied city of Makiivka.Telegram/Donetchan\r\n<ul><li>Videos appear to show Ukraine striking a Rus… [+2164 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "XDA Developers"
        },
        "author": "Kishalaya Kundu",
        "title": "Watch the Pixel Fold fail spectacularly in this durability test - XDA Developers",
        "description": "The Pixel Fold is a decent device in its own right, but it may not be the most durable foldable in the market.",
        "url": "https://www.xda-developers.com/google-pixel-fold-durability-test/",
        "urlToImage": "https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2023/06/google-pixel-fold-lifestyle-8.jpg",
        "publishedAt": "2023-07-05T16:29:00Z",
        "content": "Launched earlier this year at a hefty $1,799, Google's Pixel Fold is one of the best folding smartphones that money can buy, alongside the likes of the Galaxy Z Fold 4 and Oppo Find N2. As we noted i… [+2141 chars]"
        },
        {
        "source": {
        "id": "engadget",
        "name": "Engadget"
        },
        "author": null,
        "title": "OnePlus Nord 3 delivers a 120Hz screen and 80W fast charging | Engadget - Engadget",
        "description": "OnePlus has introduced the Nord 3, a mid-range phone that packs a 120Hz screen and 80W fast charging — if you can buy it..",
        "url": "https://www.engadget.com/oneplus-nord-3-delivers-a-120hz-screen-and-80w-fast-charging-161505940.html",
        "urlToImage": "https://s.yimg.com/uu/api/res/1.2/Z02mRiW3QU5ys3BLO73s3Q--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-07/273ea930-1b47-11ee-bf7f-7425decc434d.cf.jpg",
        "publishedAt": "2023-07-05T16:17:36Z",
        "content": "OnePlus has unveiled the Nord 3, and it's a significant upgrade over the 2T to the point where you might prefer it over comparable rivals. The new mid-range model jumps to a 6.7-inch, 120Hz 2,772 x 1… [+2469 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Al-Monitor"
        },
        "author": null,
        "title": "Elizabeth Tsurkov, Israeli-Russian researcher, kidnapped in Iraq - Al-Monitor",
        "description": "In the first public confirmation of the March abduction, the Israeli prime minister said today that the researcher is alive.",
        "url": "https://www.al-monitor.com/originals/2023/07/elizabeth-tsurkov-israeli-russian-researcher-kidnapped-iraq",
        "urlToImage": "https://www.al-monitor.com/sites/default/files/styles/social_media_share/public/2023-07/tsurkov.jpeg?h=4bd20877&itok=DQIzGxxT",
        "publishedAt": "2023-07-05T16:17:32Z",
        "content": "Elizabeth Tsurkov, an Israeli-Russian researcher with deep knowledge of the Levant who was abducted on March 21 in the Iraqi capital Baghdad, is alive, the office of Israeli Prime Minister Benjamin N… [+3505 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "NBC 5 Dallas-Fort Worth"
        },
        "author": "Samantha Davies",
        "title": "Earth's hottest day ever was recorded on July 3, 2023 - NBC 5 Dallas-Fort Worth",
        "description": "The hottest day ever on Earth was recorded on July 3, 2023 according to NOAA and the University of Maine.",
        "url": "https://www.nbcdfw.com/weather/weather-connection/earths-hottest-day-ever-was-recorded-on-july-3-2023/3289861/",
        "urlToImage": "https://media.nbcdfw.com/2023/05/Temperatura.jpg?quality=85&strip=all&resize=1200%2C675",
        "publishedAt": "2023-07-05T16:04:19Z",
        "content": "The hottest day ever on Earth happened on July 3, 2023. The average global temperature reached 62.62 degrees Fahrenheit. \r\nThe average global air temperature was recorded two meters above the Earth's… [+736 chars]"
        },
        {
        "source": {
        "id": "usa-today",
        "name": "USA Today"
        },
        "author": "Francisco Guzman",
        "title": "1 dead, 4 others injured after fireworks explosion in Gilmer, Texas, ahead of July 4 event - USA TODAY",
        "description": "One person is dead and four others injured after a fireworks explosion at a venue in Gilmer, Texas ahead of a Fourth of July event, authorities said.",
        "url": "https://www.usatoday.com/story/news/nation/2023/07/05/gilmer-texas-fireworks-explosion/70382535007/",
        "urlToImage": "https://www.usatoday.com/gcdn/presto/2021/06/08/USAT/7dfac38c-792b-4637-8aa3-71b213c5be41-AP_Explosive_Devices.JPG?crop=2058,1157,x1437,y1727&width=2058&height=1157&format=pjpg&auto=webp",
        "publishedAt": "2023-07-05T15:48:39Z",
        "content": "One person is dead and four others injured after fireworks exploded at a venue in Texas ahead of a Fourth of July event, authorities said.\r\nUpshur County Sheriffs deputies, fire agencies and medical … [+1634 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Chron.com"
        },
        "author": "Ariana Garcia",
        "title": "Intense heat is taking a toll on Houston's mosquitos, study says - Chron",
        "description": "A new study from Climate Central shows that mosquitos may be declining in Houston and the south overall due to higher temperatures.",
        "url": "https://www.chron.com/life/wildlife/article/houston-weather-mosquitos-18185245.php",
        "urlToImage": "https://s.hdnux.com/photos/01/33/43/75/24002429/3/rawImage.jpg",
        "publishedAt": "2023-07-05T15:44:34Z",
        "content": "Houston has had an average of 20 fewer so called 'mosquito days'defined as days with warm, humid days in which the insects thrive insince 1979, according to Climate Central. \r\nAnton Petrus/Getty Imag… [+2230 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "NASA"
        },
        "author": null,
        "title": "Webb Locates Dust Reservoirs in Two Supernovae - NASA",
        "description": "Researchers using NASA’s James Webb Space Telescope have made major strides in confirming the source of dust in early galaxies.",
        "url": "https://www.nasa.gov/feature/goddard/2023/webb-locates-dust-reservoirs-in-two-supernovae",
        "urlToImage": "http://www.nasa.gov/sites/default/files/thumbnails/image/stsci-01h3d1s4xw04px7s4qen08ghvy.png",
        "publishedAt": "2023-07-05T15:04:36Z",
        "content": null
        },
        {
        "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
        },
        "author": "Ivan Mehta",
        "title": "Twitter silently removes login requirement for viewing tweets - TechCrunch",
        "description": "Days after requiring users to log in to view tweets on the web, Twitter has silently removed these restrictions.",
        "url": "https://techcrunch.com/2023/07/05/twitter-silently-removes-login-requirement-for-viewing-tweets/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/05/GettyImages-1246184086.jpg?resize=1200,733",
        "publishedAt": "2023-07-05T14:30:58Z",
        "content": "Days after requiring users to log in to view tweets, Twitter has silently removed these restrictions. This means you can open Twitter links in a browser without an account.\r\nWe at TechCrunch noticed … [+1218 chars]"
        }
        ]
    constructor(){
        super();
        this.state={
            articles:this.articles,
            loading:true,
            page:1
        }
    }
    async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ace6000000cc4f0e9eaaa6ebc3581650&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({ articles: parsedData.articles,loading:false})
  }
   handlenextclick= async ()=>{
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / (this.props.pageSize)))) {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ace6000000cc4f0e9eaaa6ebc3581650&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
             this.setState({loading:true})
              let data = await fetch(url)
              let parsedData = await data.json()
              // console.log(parsedData);
              this.setState({ 
                articles: parsedData.articles,
                page:this.state.page+1,
                loading:false
              })
    }
    
      
  }
  handleprevclick= async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ace6000000cc4f0e9eaaa6ebc3581650&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
      let data = await fetch(url)
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({ 
        articles: parsedData.articles,
        page:this.state.page-1,
        loading:false
      })

  }
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center' style={{margin:'35px 0px'}}>News Mania-Top Headlines</h1>
       {this.state.loading && <Spin/>} 
        <div className='row '>
            {!this.state.loading && this.state.articles.map((element)=>{
              return <div className='col-md-4' key={element.url}>
                 <NewsItem  title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
              </div>
            })}
        </div>
        <div className="container d-flex justify-content-between my-3"  >
        <button type="button" disabled={this.state.page<=1} class="btn btn-drak" onClick={this.handleprevclick}> &larr; Previous</button>
        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults /(this.props.pageSize))} class="btn btn-dark" onClick={this.handlenextclick}>Next &rarr; </button>
        </div>
      </div>
    )
  }
}
