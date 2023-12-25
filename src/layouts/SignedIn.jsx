import React from 'react'
import { Menu, Image, Dropdown } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://w7.pngwing.com/pngs/505/761/png-transparent-login-computer-icons-avatar-icon-monochrome-black-silhouette.png" />
            <Dropdown pointing="top left" text='John'>
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info"/>
                    <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
