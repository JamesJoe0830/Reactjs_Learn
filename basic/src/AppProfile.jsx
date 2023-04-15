import React from "react";
import Avatar from "./components/Avatar";
import Profile from "./components/Profile";
export default function AppProfile() {
  const handleClick = () =>{
    console.log("Click 되었습니다.")
  }
  return (
    <div>
      <button onClick={handleClick}> 클릭 버튼 </button>
      <Avatar
        image="https://blog.kakaocdn.net/dn/dKCK2U/btqUekxdPc8/obYkOupRiOMIBY7CUDShk0/img.jpg"
        isNew={true}
      />
      <Profile
        image="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MTVfMjM3%2FMDAxNjIxMDY5NjkzMTU3.h4H-XroA8Hh524cZCApdtOSuiuV3L-9XDJCqYfi4hZYg.7GPi4eo59bQyVSVlGO36GnJ0ApZyOappRDRIghSNYcwg.JPEG.choconemo%2F%25C7%25E0%25BA%25B9%25C7%25D1%25C4%25F5%25C4%25AB_2.jpg&type=sc960_832"
        name="James"
        title="프론트엔드 개발자"
        isNew={true}
      />
      <Profile
        image="https://mblogthumb-phinf.pstatic.net/MjAxOTA3MjhfMTQ5/MDAxNTY0Mjk5OTU5ODc4.BbGD0FlQhFLH0-jb4EGuSH72NqOhQFrOhKnPpVYoKUYg._kZOgqyeWMqm7vpG1G7kiczyFn3Bw-Wu7xQ6wpUfcwAg.JPEG.s_jung1986/1564298936631.jpg?type=w800"
        name="Peter Hyun"
        title="풀스텍 개발자"
      />
      <Profile
        image="https://i.pinimg.com/originals/ff/b3/b8/ffb3b82af736f876d2475769f012b6b8.jpg"
        name="JooYun"
        title="백엔드 개발자"
      />
    </div>
  );
}
