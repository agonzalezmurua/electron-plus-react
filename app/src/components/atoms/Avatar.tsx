import tw, { styled } from "twin.macro";

type AvatarProps = {
  size?: "big" | "medium" | "small";
};

const Avatar = styled.img<AvatarProps>`
  ${tw`rounded-full  inline-block bg-white`}

  ${({size}) => {
    switch (size) {
      case "small":
        return tw`w-8 h-8`;
      case "medium":
        return tw`w-16 h-16`
      case "big":
        return tw`w-32 h-32`
    }
  }}
`;

Avatar.defaultProps = {
  size: "medium",
};

export default Avatar;
