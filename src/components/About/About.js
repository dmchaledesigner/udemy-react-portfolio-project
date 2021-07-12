import React from 'react';
import './about.scss';

import person from '../../images/david.jpg';

const About = () => {
    return (
        <React.Fragment>

<div id="about" className="container person">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={person} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>Magna perspiciatis corporis elementum suspendisse! Voluptas dictumst rerum, pharetra inceptos. Distinctio ea! Nibh quae eos voluptatibus porro commodo venenatis veniam at nostra porro nam magna, hic, expedita minus praesentium dolorem suscipit praesentium distinctio diamlorem laoreet repellat? Quos per mattis! Maecenas? Vitae totam, egestas atque inceptos, voluptatum turpis! Voluptatibus! Ad dictum, deserunt class wisi a tortor leo justo eros aliquet provident! Ab nullam eleifend vulputate montes illo! Earum fringilla numquam repellendus, felis cillum! Nonummy diam beatae dignissim felis? Placerat, aenean iste odit consectetur elit, gravida, fuga corrupti molestias dignissimos? Quod odit, sapien, nascetur dolorem explicabo accusantium iusto omnis facere, odit dapibus.</p>

<p>Voluptate turpis nullam mollitia hendrerit ullam cumque illo deleniti wisi orci cillum reprehenderit unde! Aut, torquent turpis soluta. Veritatis aliqua aliquam proin? Nibh, nostra, natus quod eu! Laoreet. Sodales eget earum sem posuere explicabo, diamlorem incidunt laborum exercitationem rhoncus molestie, occaecat doloremque! Iure viverra voluptates. Ducimus? Asperiores, nemo, pellentesque. Doloribus sodales proin. Officia voluptas facilisis fermentum quae cumque elit eum, integer non nec nisi eveniet. Posuere quo, elementum mus pede sint, soluta! Sed natus habitant aliquam deserunt fuga aliqua explicabo, et alias optio potenti, sequi sagittis etiam nemo, fermentum praesent? Faucibus! Fringilla mus consequat. Irure aenean doloremque voluptatem porta maxime.</p>
        </div>
      </div>
    </div>

        </React.Fragment>
    )
}

export default About
