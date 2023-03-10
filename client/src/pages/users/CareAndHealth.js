import React from 'react';
import Navbar from '../../components/Navbar';
import CareInfo from '../../components/CareInfo';
import "../../css/careandhealth.css";

class CareAndHealth extends React.Component {

  render() {
    const careInfo = [
        {
            "heading" : "test",
            "paragraphs" : [
                "Vivamus blandit, odio eget ornare consequat, leo sapien malesuada enim, vel faucibus arcu erat sed tortor. Ut a ligula consectetur, aliquet neque ac, interdum odio. Sed pharetra lectus erat, eget consequat dolor consequat at. Aliquam volutpat facilisis dolor, sed porta mi posuere in. In molestie ipsum nec ligula dignissim egestas. Nullam tincidunt faucibus tellus, vel tempor mi lobortis vel. Donec ultrices massa vitae ultricies tincidunt. Ut egestas, nisi quis pharetra venenatis, velit nunc maximus neque, eget mollis turpis libero non mauris. Curabitur accumsan mauris nec lacus porta fermentum. Cras elementum tortor nibh, nec mattis tortor porta vitae. Curabitur dui justo, rutrum id tortor vel, pharetra faucibus nulla. Vivamus rutrum non tortor quis malesuada. Aliquam ut felis vel urna accumsan dignissim. Morbi ullamcorper luctus nisl eget sodales.",
                " Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus accumsan mollis dolor, sed tincidunt lorem ultricies non. Maecenas non cursus magna, vitae consequat ligula. Suspendisse non dolor in erat finibus lacinia in eu enim. Etiam gravida enim sed magna mattis sagittis. Praesent rutrum ultrices turpis, eget vulputate diam accumsan id. Quisque bibendum quis lectus vitae auctor. Quisque consequat fermentum est eget faucibus. Praesent semper risus lacus, vel dapibus risus vehicula at. Donec rutrum nisi eget lectus tristique, ac hendrerit dolor gravida. Phasellus velit enim, dapibus et est id, vehicula accumsan elit. Vivamus scelerisque nec sapien at egestas. Nulla eu ligula varius velit feugiat porta. Morbi rutrum elit at orci pharetra commodo. Praesent id erat sit amet lectus hendrerit tempus id vel mi. Nam id interdum lorem. "
                ]
        },
        {
            "heading" : "test2",
            "paragraphs" : [
                " Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus accumsan mollis dolor, sed tincidunt lorem ultricies non. Maecenas non cursus magna, vitae consequat ligula. Suspendisse non dolor in erat finibus lacinia in eu enim. Etiam gravida enim sed magna mattis sagittis. Praesent rutrum ultrices turpis, eget vulputate diam accumsan id. Quisque bibendum quis lectus vitae auctor. Quisque consequat fermentum est eget faucibus. Praesent semper risus lacus, vel dapibus risus vehicula at. Donec rutrum nisi eget lectus tristique, ac hendrerit dolor gravida. Phasellus velit enim, dapibus et est id, vehicula accumsan elit. Vivamus scelerisque nec sapien at egestas. Nulla eu ligula varius velit feugiat porta. Morbi rutrum elit at orci pharetra commodo. Praesent id erat sit amet lectus hendrerit tempus id vel mi. Nam id interdum lorem. "
                ]
        },
    ];
    return (

      <div className="App">
        <Navbar/>
        <br/>
        {careInfo.map(e => {
            return <CareInfo config={e}/>
        })}
        {}
      </div>
    );
  }
}

export default CareAndHealth;
