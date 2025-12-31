// Icons component using React Icons
import React from 'react';
import {
  HiMagnifyingGlass,
  HiBars3,
  HiXMark,
  HiQuestionMarkCircle,
  HiChatBubbleLeftRight,
  HiMapPin,
  HiUser,
  HiChevronLeft,
  HiChevronRight,
  HiChevronDown,
  HiShoppingBag,
} from 'react-icons/hi2';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
} from 'react-icons/fa6';
import { cn } from '@/lib/utils';

export interface IconProps {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}

const iconBaseClasses = 'flex-shrink-0';

// Icon wrapper for consistent API with React Icons
const IconWrapper: React.FC<{
  Icon: React.ComponentType<{ className?: string; size?: number | string; style?: React.CSSProperties }>;
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}> = ({ Icon, className, size = 24, style }) => (
  <Icon
    className={cn(iconBaseClasses, className)}
    size={size}
    style={style}
  />
);

export const SearchIcon: React.FC<IconProps> = (props) => (
  <IconWrapper Icon={HiMagnifyingGlass} {...props} />
);

export const MenuIcon: React.FC<IconProps> = (props) => (
  <IconWrapper Icon={HiBars3} {...props} />
);

export const CloseIcon: React.FC<IconProps> = (props) => (
  <IconWrapper Icon={HiXMark} {...props} />
);

export const HelpIcon: React.FC<IconProps> = (props) => (
  <IconWrapper Icon={HiQuestionMarkCircle} {...props} />
);

export const ChatIcon: React.FC<IconProps> = (props) => (
  <IconWrapper Icon={HiChatBubbleLeftRight} {...props} />
);

export const LocationIcon: React.FC<IconProps> = (props) => (
  <IconWrapper Icon={HiMapPin} {...props} />
);

export const ShoppingBagIcon: React.FC<IconProps> = (props) => (
  <IconWrapper Icon={HiShoppingBag} {...props} />
);

export const UserIcon: React.FC<IconProps> = (props) => (
  <IconWrapper Icon={HiUser} {...props} />
);

export const ChevronLeftIcon: React.FC<IconProps> = (props) => (
  <IconWrapper Icon={HiChevronLeft} {...props} />
);

export const ChevronRightIcon: React.FC<IconProps> = (props) => (
  <IconWrapper Icon={HiChevronRight} {...props} />
);

export const ChevronDownIcon: React.FC<IconProps> = (props) => (
  <IconWrapper Icon={HiChevronDown} {...props} />
);

// Social Media Icons
export const FacebookIcon: React.FC<IconProps> = (props) => (
  <IconWrapper Icon={FaFacebook} {...props} />
);

export const InstagramIcon: React.FC<IconProps> = (props) => (
  <IconWrapper Icon={FaInstagram} {...props} />
);

export const TwitterIcon: React.FC<IconProps> = (props) => (
  <IconWrapper Icon={FaTwitter} {...props} />
);

export const YoutubeIcon: React.FC<IconProps> = (props) => (
  <IconWrapper Icon={FaYoutube} {...props} />
);

export const LinkedInIcon: React.FC<IconProps> = (props) => (
  <IconWrapper Icon={FaLinkedin} {...props} />
);

export const TikTokIcon: React.FC<IconProps> = (props) => (
  <IconWrapper Icon={FaTiktok} {...props} />
);

