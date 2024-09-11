## 安装

```js
pnpm install @yl-d/icon;
```

## 使用 CDN

```html
<script src="https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/icon.min.js"></script>
```

## 基本用法

```jsx | pureReact
import { CopyToClipboard } from '@yl-d/design';
import {
  IconZoomOut,
  IconZoomIn,
  IconXiguaColor,
  IconWoman,
  IconWifi,
  IconWeibo,
  IconWeiboCircleFill,
  IconWechatpay,
  IconWechat,
  IconVoice,
  IconVideoCamera,
  IconUser,
  IconUserGroup,
  IconUserAdd,
  IconUpload,
  IconUp,
  IconUpCircle,
  IconUnorderedList,
  IconUnlock,
  IconUndo,
  IconUnderline,
  IconTwitter,
  IconTwitterCircleFill,
  IconTrophy,
  IconTranslate,
  IconTool,
  IconToTop,
  IconToRight,
  IconToLeft,
  IconToBottom,
  IconTiktokColor,
  IconThunderbolt,
  IconThumbUp,
  IconThumbUpFill,
  IconThumbDown,
  IconThumbDownFill,
  IconTags,
  IconTag,
  IconSync,
  IconSwap,
  IconSun,
  IconSunFill,
  IconSubscribed,
  IconSubscribe,
  IconSubscribeAdd,
  IconStrikethrough,
  IconStorage,
  IconStop,
  IconStar,
  IconStarFill,
  IconStamp,
  IconSound,
  IconSoundFill,
  IconSort,
  IconSortDescending,
  IconSortAscending,
  IconSkipPrevious,
  IconSkipPreviousFill,
  IconSkipNext,
  IconSkipNextFill,
  IconSkin,
  IconShrink,
  IconShareInternal,
  IconShareExternal,
  IconShareAlt,
  IconShake,
  IconSettings,
  IconSend,
  IconSelectAll,
  IconSearch,
  IconScissor,
  IconSchedule,
  IconScan,
  IconSave,
  IconSafe,
  IconRotateRight,
  IconRotateLeft,
  IconRobot,
  IconRobotAdd,
  IconRight,
  IconRightCircle,
  IconReply,
  IconRefresh,
  IconRedo,
  IconRecord,
  IconRecordStop,
  IconQuote,
  IconQuestion,
  IconQuestionCircle,
  IconQuestionCircleFill,
  IconQrcode,
  IconQq,
  IconQqZone,
  IconQqCircleFill,
  IconPushpin,
  IconPublic,
  IconPrinter,
  IconPoweroff,
  IconPlus,
  IconPlusCircle,
  IconPlusCircleFill,
  IconPlayCircle,
  IconPlayCircleFill,
  IconPlayArrow,
  IconPlayArrowFill,
  IconPhone,
  IconPen,
  IconPenFill,
  IconPause,
  IconPauseCircle,
  IconPauseCircleFill,
  IconPaste,
  IconPalette,
  IconOriginalSize,
  IconOrderedList,
  IconObliqueLine,
  IconNotification,
  IconNotificationClose,
  IconNav,
  IconMute,
  IconMuteFill,
  IconMusic,
  IconMosaic,
  IconMore,
  IconMoreVertical,
  IconMoon,
  IconMoonFill,
  IconMobile,
  IconMinus,
  IconMinusCircle,
  IconMinusCircleFill,
  IconMindMapping,
  IconMessage,
  IconMessageBanned,
  IconMenu,
  IconMenuUnfold,
  IconMenuFold,
  IconMan,
  IconLoop,
  IconLock,
  IconLocation,
  IconLoading,
  IconLiveBroadcast,
  IconList,
  IconLink,
  IconLineHeight,
  IconLeft,
  IconLeftCircle,
  IconLayout,
  IconLaunch,
  IconLarkColor,
  IconLanguage,
  IconItalic,
  IconInteraction,
  IconInfo,
  IconInfoCircle,
  IconInfoCircleFill,
  IconImport,
  IconImage,
  IconImageClose,
  IconIdcard,
  IconHome,
  IconHistory,
  IconHighlight,
  IconHeart,
  IconHeartFill,
  IconH7,
  IconH6,
  IconH5,
  IconH4,
  IconH3,
  IconH2,
  IconH1,
  IconGoogle,
  IconGoogleCircleFill,
  IconGitlab,
  IconGithub,
  IconGift,
  IconFullscreen,
  IconFullscreenExit,
  IconForward,
  IconFormula,
  IconFontColors,
  IconFolder,
  IconFolderDelete,
  IconFolderAdd,
  IconFire,
  IconFindReplace,
  IconFilter,
  IconFile,
  IconFileVideo,
  IconFilePdf,
  IconFileImage,
  IconFileAudio,
  IconFacebook,
  IconFacebookSquareFill,
  IconFaceBookCircleFill,
  IconFaceSmileFill,
  IconFaceMehFill,
  IconFaceFrownFill,
  IconEye,
  IconEyeInvisible,
  IconExport,
  IconExperiment,
  IconExpand,
  IconExclamation,
  IconExclamationPolygonFill,
  IconExclamationCircle,
  IconExclamationCircleFill,
  IconEraser,
  IconEnglishFill,
  IconEmpty,
  IconEmail,
  IconEdit,
  IconEar,
  IconDriveFile,
  IconDragDot,
  IconDragDotVertical,
  IconDragArrow,
  IconDownload,
  IconDown,
  IconDownCircle,
  IconDoubleUp,
  IconDoubleRight,
  IconDoubleLeft,
  IconDoubleDown,
  IconDice,
  IconDesktop,
  IconDelete,
  IconDashboard,
  IconCustomerService,
  IconCopyright,
  IconCopy,
  IconCompass,
  IconCommon,
  IconCommand,
  IconCodepen,
  IconCode,
  IconCodeSquare,
  IconCodeSandbox,
  IconCodeBlock,
  IconCloud,
  IconCloudDownload,
  IconClose,
  IconCloseCircle,
  IconCloseCircleFill,
  IconClockCircle,
  IconChineseFill,
  IconCheck,
  IconCheckSquare,
  IconCheckCircle,
  IconCheckCircleFill,
  IconCaretUp,
  IconCaretRight,
  IconCaretLeft,
  IconCaretDown,
  IconCamera,
  IconCalendar,
  IconCalendarClock,
  IconBytedanceColor,
  IconBulb,
  IconBug,
  IconBrush,
  IconBranch,
  IconBook,
  IconBold,
  IconBgColors,
  IconBackward,
  IconAttachment,
  IconAt,
  IconArrowUp,
  IconArrowRise,
  IconArrowRight,
  IconArrowLeft,
  IconArrowFall,
  IconArrowDown,
  IconArchive,
  IconApps,
  IconAlipayCircle,
  IconAlignRight,
  IconAlignLeft,
  IconAlignCenter,
} from '@yl-d/icon';

export default () => {
  return (
    <div className="yld-icon-demo-wrap">
      <CopyToClipboard message text="<IconZoomOut />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconZoomOut</span>
          <IconZoomOut style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconZoomIn />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconZoomIn</span>
          <IconZoomIn style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconXiguaColor />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconXiguaColor</span>
          <IconXiguaColor style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconWoman />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconWoman</span>
          <IconWoman style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconWifi />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconWifi</span>
          <IconWifi style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconWeibo />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconWeibo</span>
          <IconWeibo style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconWeiboCircleFill />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconWeiboCircleFill</span>
          <IconWeiboCircleFill style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconWechatpay />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconWechatpay</span>
          <IconWechatpay style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconWechat />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconWechat</span>
          <IconWechat style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconVoice />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconVoice</span>
          <IconVoice style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconVideoCamera />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconVideoCamera</span>
          <IconVideoCamera style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconUser />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconUser</span>
          <IconUser style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconUserGroup />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconUserGroup</span>
          <IconUserGroup style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconUserAdd />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconUserAdd</span>
          <IconUserAdd style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconUpload />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconUpload</span>
          <IconUpload style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconUp />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconUp</span>
          <IconUp style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconUpCircle />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconUpCircle</span>
          <IconUpCircle style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconUnorderedList />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconUnorderedList</span>
          <IconUnorderedList style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconUnlock />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconUnlock</span>
          <IconUnlock style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconUndo />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconUndo</span>
          <IconUndo style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconUnderline />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconUnderline</span>
          <IconUnderline style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconTwitter />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconTwitter</span>
          <IconTwitter style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconTwitterCircleFill />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconTwitterCircleFill</span>
          <IconTwitterCircleFill style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconTrophy />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconTrophy</span>
          <IconTrophy style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconTranslate />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconTranslate</span>
          <IconTranslate style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconTool />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconTool</span>
          <IconTool style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconToTop />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconToTop</span>
          <IconToTop style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconToRight />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconToRight</span>
          <IconToRight style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconToLeft />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconToLeft</span>
          <IconToLeft style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconToBottom />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconToBottom</span>
          <IconToBottom style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconTiktokColor />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconTiktokColor</span>
          <IconTiktokColor style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconThunderbolt />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconThunderbolt</span>
          <IconThunderbolt style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconThumbUp />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconThumbUp</span>
          <IconThumbUp style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconThumbUpFill />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconThumbUpFill</span>
          <IconThumbUpFill style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconThumbDown />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconThumbDown</span>
          <IconThumbDown style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconThumbDownFill />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconThumbDownFill</span>
          <IconThumbDownFill style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconTags />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconTags</span>
          <IconTags style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconTag />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconTag</span>
          <IconTag style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconSync />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconSync</span>
          <IconSync style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconSwap />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconSwap</span>
          <IconSwap style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconSun />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconSun</span>
          <IconSun style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconSunFill />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconSunFill</span>
          <IconSunFill style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconSubscribed />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconSubscribed</span>
          <IconSubscribed style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconSubscribe />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconSubscribe</span>
          <IconSubscribe style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconSubscribeAdd />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconSubscribeAdd</span>
          <IconSubscribeAdd style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconStrikethrough />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconStrikethrough</span>
          <IconStrikethrough style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconStorage />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconStorage</span>
          <IconStorage style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconStop />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconStop</span>
          <IconStop style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconStar />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconStar</span>
          <IconStar style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconStarFill />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconStarFill</span>
          <IconStarFill style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconStamp />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconStamp</span>
          <IconStamp style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconSound />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconSound</span>
          <IconSound style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconSoundFill />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconSoundFill</span>
          <IconSoundFill style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconSort />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconSort</span>
          <IconSort style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconSortDescending />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconSortDescending</span>
          <IconSortDescending style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconSortAscending />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconSortAscending</span>
          <IconSortAscending style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconSkipPrevious />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconSkipPrevious</span>
          <IconSkipPrevious style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconSkipPreviousFill />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconSkipPreviousFill</span>
          <IconSkipPreviousFill style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconSkipNext />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconSkipNext</span>
          <IconSkipNext style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconSkipNextFill />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconSkipNextFill</span>
          <IconSkipNextFill style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconSkin />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconSkin</span>
          <IconSkin style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconShrink />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconShrink</span>
          <IconShrink style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconShareInternal />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconShareInternal</span>
          <IconShareInternal style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconShareExternal />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconShareExternal</span>
          <IconShareExternal style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconShareAlt />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconShareAlt</span>
          <IconShareAlt style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconShake />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconShake</span>
          <IconShake style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconSettings />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconSettings</span>
          <IconSettings style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconSend />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconSend</span>
          <IconSend style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconSelectAll />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconSelectAll</span>
          <IconSelectAll style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconSearch />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconSearch</span>
          <IconSearch style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconScissor />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconScissor</span>
          <IconScissor style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconSchedule />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconSchedule</span>
          <IconSchedule style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconScan />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconScan</span>
          <IconScan style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconSave />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconSave</span>
          <IconSave style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconSafe />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconSafe</span>
          <IconSafe style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconRotateRight />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconRotateRight</span>
          <IconRotateRight style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconRotateLeft />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconRotateLeft</span>
          <IconRotateLeft style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconRobot />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconRobot</span>
          <IconRobot style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconRobotAdd />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconRobotAdd</span>
          <IconRobotAdd style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconRight />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconRight</span>
          <IconRight style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconRightCircle />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconRightCircle</span>
          <IconRightCircle style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconReply />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconReply</span>
          <IconReply style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconRefresh />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconRefresh</span>
          <IconRefresh style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconRedo />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconRedo</span>
          <IconRedo style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconRecord />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconRecord</span>
          <IconRecord style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconRecordStop />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconRecordStop</span>
          <IconRecordStop style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconQuote />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconQuote</span>
          <IconQuote style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconQuestion />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconQuestion</span>
          <IconQuestion style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconQuestionCircle />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconQuestionCircle</span>
          <IconQuestionCircle style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconQuestionCircleFill />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconQuestionCircleFill</span>
          <IconQuestionCircleFill style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconQrcode />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconQrcode</span>
          <IconQrcode style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconQq />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconQq</span>
          <IconQq style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconQqZone />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconQqZone</span>
          <IconQqZone style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconQqCircleFill />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconQqCircleFill</span>
          <IconQqCircleFill style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconPushpin />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconPushpin</span>
          <IconPushpin style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconPublic />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconPublic</span>
          <IconPublic style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconPrinter />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconPrinter</span>
          <IconPrinter style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconPoweroff />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconPoweroff</span>
          <IconPoweroff style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconPlus />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconPlus</span>
          <IconPlus style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconPlusCircle />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconPlusCircle</span>
          <IconPlusCircle style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconPlusCircleFill />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconPlusCircleFill</span>
          <IconPlusCircleFill style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconPlayCircle />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconPlayCircle</span>
          <IconPlayCircle style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconPlayCircleFill />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconPlayCircleFill</span>
          <IconPlayCircleFill style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconPlayArrow />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconPlayArrow</span>
          <IconPlayArrow style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconPlayArrowFill />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconPlayArrowFill</span>
          <IconPlayArrowFill style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconPhone />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconPhone</span>
          <IconPhone style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconPen />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconPen</span>
          <IconPen style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconPenFill />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconPenFill</span>
          <IconPenFill style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconPause />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconPause</span>
          <IconPause style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconPauseCircle />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconPauseCircle</span>
          <IconPauseCircle style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconPauseCircleFill />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconPauseCircleFill</span>
          <IconPauseCircleFill style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconPaste />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconPaste</span>
          <IconPaste style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconPalette />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconPalette</span>
          <IconPalette style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconOriginalSize />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconOriginalSize</span>
          <IconOriginalSize style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconOrderedList />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconOrderedList</span>
          <IconOrderedList style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconObliqueLine />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconObliqueLine</span>
          <IconObliqueLine style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconNotification />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconNotification</span>
          <IconNotification style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconNotificationClose />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconNotificationClose</span>
          <IconNotificationClose style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconNav />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconNav</span>
          <IconNav style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconMute />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconMute</span>
          <IconMute style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconMuteFill />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconMuteFill</span>
          <IconMuteFill style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconMusic />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconMusic</span>
          <IconMusic style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconMosaic />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconMosaic</span>
          <IconMosaic style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconMore />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconMore</span>
          <IconMore style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconMoreVertical />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconMoreVertical</span>
          <IconMoreVertical style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconMoon />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconMoon</span>
          <IconMoon style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconMoonFill />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconMoonFill</span>
          <IconMoonFill style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconMobile />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconMobile</span>
          <IconMobile style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconMinus />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconMinus</span>
          <IconMinus style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconMinusCircle />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconMinusCircle</span>
          <IconMinusCircle style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconMinusCircleFill />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconMinusCircleFill</span>
          <IconMinusCircleFill style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconMindMapping />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconMindMapping</span>
          <IconMindMapping style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconMessage />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconMessage</span>
          <IconMessage style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconMessageBanned />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconMessageBanned</span>
          <IconMessageBanned style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconMenu />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconMenu</span>
          <IconMenu style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconMenuUnfold />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconMenuUnfold</span>
          <IconMenuUnfold style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconMenuFold />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconMenuFold</span>
          <IconMenuFold style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconMan />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconMan</span>
          <IconMan style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconLoop />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconLoop</span>
          <IconLoop style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconLock />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconLock</span>
          <IconLock style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconLocation />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconLocation</span>
          <IconLocation style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconLoading />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconLoading</span>
          <IconLoading style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconLiveBroadcast />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconLiveBroadcast</span>
          <IconLiveBroadcast style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconList />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconList</span>
          <IconList style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconLink />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconLink</span>
          <IconLink style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconLineHeight />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconLineHeight</span>
          <IconLineHeight style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconLeft />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconLeft</span>
          <IconLeft style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconLeftCircle />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconLeftCircle</span>
          <IconLeftCircle style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconLayout />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconLayout</span>
          <IconLayout style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconLaunch />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconLaunch</span>
          <IconLaunch style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconLarkColor />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconLarkColor</span>
          <IconLarkColor style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconLanguage />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconLanguage</span>
          <IconLanguage style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconItalic />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconItalic</span>
          <IconItalic style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconInteraction />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconInteraction</span>
          <IconInteraction style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconInfo />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconInfo</span>
          <IconInfo style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconInfoCircle />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconInfoCircle</span>
          <IconInfoCircle style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconInfoCircleFill />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconInfoCircleFill</span>
          <IconInfoCircleFill style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconImport />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconImport</span>
          <IconImport style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconImage />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconImage</span>
          <IconImage style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconImageClose />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconImageClose</span>
          <IconImageClose style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconIdcard />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconIdcard</span>
          <IconIdcard style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconHome />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconHome</span>
          <IconHome style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconHistory />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconHistory</span>
          <IconHistory style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconHighlight />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconHighlight</span>
          <IconHighlight style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconHeart />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconHeart</span>
          <IconHeart style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconHeartFill />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconHeartFill</span>
          <IconHeartFill style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconH7 />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconH7</span>
          <IconH7 style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconH6 />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconH6</span>
          <IconH6 style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconH5 />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconH5</span>
          <IconH5 style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconH4 />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconH4</span>
          <IconH4 style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconH3 />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconH3</span>
          <IconH3 style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconH2 />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconH2</span>
          <IconH2 style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconH1 />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconH1</span>
          <IconH1 style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconGoogle />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconGoogle</span>
          <IconGoogle style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconGoogleCircleFill />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconGoogleCircleFill</span>
          <IconGoogleCircleFill style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconGitlab />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconGitlab</span>
          <IconGitlab style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconGithub />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconGithub</span>
          <IconGithub style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconGift />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconGift</span>
          <IconGift style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconFullscreen />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconFullscreen</span>
          <IconFullscreen style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconFullscreenExit />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconFullscreenExit</span>
          <IconFullscreenExit style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconForward />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconForward</span>
          <IconForward style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconFormula />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconFormula</span>
          <IconFormula style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconFontColors />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconFontColors</span>
          <IconFontColors style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconFolder />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconFolder</span>
          <IconFolder style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconFolderDelete />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconFolderDelete</span>
          <IconFolderDelete style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconFolderAdd />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconFolderAdd</span>
          <IconFolderAdd style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconFire />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconFire</span>
          <IconFire style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconFindReplace />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconFindReplace</span>
          <IconFindReplace style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconFilter />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconFilter</span>
          <IconFilter style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconFile />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconFile</span>
          <IconFile style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconFileVideo />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconFileVideo</span>
          <IconFileVideo style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconFilePdf />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconFilePdf</span>
          <IconFilePdf style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconFileImage />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconFileImage</span>
          <IconFileImage style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconFileAudio />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconFileAudio</span>
          <IconFileAudio style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconFacebook />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconFacebook</span>
          <IconFacebook style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconFacebookSquareFill />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconFacebookSquareFill</span>
          <IconFacebookSquareFill style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconFaceBookCircleFill />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconFaceBookCircleFill</span>
          <IconFaceBookCircleFill style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconFaceSmileFill />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconFaceSmileFill</span>
          <IconFaceSmileFill style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconFaceMehFill />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconFaceMehFill</span>
          <IconFaceMehFill style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconFaceFrownFill />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconFaceFrownFill</span>
          <IconFaceFrownFill style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconEye />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconEye</span>
          <IconEye style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconEyeInvisible />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconEyeInvisible</span>
          <IconEyeInvisible style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconExport />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconExport</span>
          <IconExport style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconExperiment />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconExperiment</span>
          <IconExperiment style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconExpand />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconExpand</span>
          <IconExpand style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconExclamation />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconExclamation</span>
          <IconExclamation style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconExclamationPolygonFill />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconExclamationPolygonFill</span>
          <IconExclamationPolygonFill style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconExclamationCircle />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconExclamationCircle</span>
          <IconExclamationCircle style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconExclamationCircleFill />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconExclamationCircleFill</span>
          <IconExclamationCircleFill style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconEraser />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconEraser</span>
          <IconEraser style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconEnglishFill />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconEnglishFill</span>
          <IconEnglishFill style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconEmpty />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconEmpty</span>
          <IconEmpty style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconEmail />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconEmail</span>
          <IconEmail style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconEdit />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconEdit</span>
          <IconEdit style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconEar />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconEar</span>
          <IconEar style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconDriveFile />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconDriveFile</span>
          <IconDriveFile style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconDragDot />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconDragDot</span>
          <IconDragDot style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconDragDotVertical />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconDragDotVertical</span>
          <IconDragDotVertical style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconDragArrow />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconDragArrow</span>
          <IconDragArrow style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconDownload />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconDownload</span>
          <IconDownload style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconDown />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconDown</span>
          <IconDown style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconDownCircle />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconDownCircle</span>
          <IconDownCircle style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconDoubleUp />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconDoubleUp</span>
          <IconDoubleUp style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconDoubleRight />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconDoubleRight</span>
          <IconDoubleRight style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconDoubleLeft />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconDoubleLeft</span>
          <IconDoubleLeft style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconDoubleDown />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconDoubleDown</span>
          <IconDoubleDown style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconDice />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconDice</span>
          <IconDice style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconDesktop />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconDesktop</span>
          <IconDesktop style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconDelete />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconDelete</span>
          <IconDelete style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconDashboard />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconDashboard</span>
          <IconDashboard style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconCustomerService />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconCustomerService</span>
          <IconCustomerService style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconCopyright />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconCopyright</span>
          <IconCopyright style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconCopy />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconCopy</span>
          <IconCopy style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconCompass />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconCompass</span>
          <IconCompass style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconCommon />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconCommon</span>
          <IconCommon style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconCommand />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconCommand</span>
          <IconCommand style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconCodepen />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconCodepen</span>
          <IconCodepen style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconCode />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconCode</span>
          <IconCode style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconCodeSquare />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconCodeSquare</span>
          <IconCodeSquare style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconCodeSandbox />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconCodeSandbox</span>
          <IconCodeSandbox style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconCodeBlock />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconCodeBlock</span>
          <IconCodeBlock style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconCloud />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconCloud</span>
          <IconCloud style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconCloudDownload />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconCloudDownload</span>
          <IconCloudDownload style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconClose />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconClose</span>
          <IconClose style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconCloseCircle />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconCloseCircle</span>
          <IconCloseCircle style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconCloseCircleFill />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconCloseCircleFill</span>
          <IconCloseCircleFill style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconClockCircle />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconClockCircle</span>
          <IconClockCircle style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconChineseFill />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconChineseFill</span>
          <IconChineseFill style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconCheck />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconCheck</span>
          <IconCheck style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconCheckSquare />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconCheckSquare</span>
          <IconCheckSquare style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconCheckCircle />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconCheckCircle</span>
          <IconCheckCircle style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconCheckCircleFill />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconCheckCircleFill</span>
          <IconCheckCircleFill style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconCaretUp />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconCaretUp</span>
          <IconCaretUp style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconCaretRight />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconCaretRight</span>
          <IconCaretRight style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconCaretLeft />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconCaretLeft</span>
          <IconCaretLeft style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconCaretDown />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconCaretDown</span>
          <IconCaretDown style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconCamera />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconCamera</span>
          <IconCamera style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconCalendar />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconCalendar</span>
          <IconCalendar style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconCalendarClock />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconCalendarClock</span>
          <IconCalendarClock style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconBytedanceColor />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconBytedanceColor</span>
          <IconBytedanceColor style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconBulb />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconBulb</span>
          <IconBulb style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconBug />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconBug</span>
          <IconBug style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconBrush />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconBrush</span>
          <IconBrush style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconBranch />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconBranch</span>
          <IconBranch style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconBook />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconBook</span>
          <IconBook style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconBold />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconBold</span>
          <IconBold style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconBgColors />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconBgColors</span>
          <IconBgColors style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconBackward />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconBackward</span>
          <IconBackward style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconAttachment />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconAttachment</span>
          <IconAttachment style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconAt />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconAt</span>
          <IconAt style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconArrowUp />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconArrowUp</span>
          <IconArrowUp style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconArrowRise />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconArrowRise</span>
          <IconArrowRise style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconArrowRight />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconArrowRight</span>
          <IconArrowRight style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconArrowLeft />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconArrowLeft</span>
          <IconArrowLeft style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconArrowFall />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconArrowFall</span>
          <IconArrowFall style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconArrowDown />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconArrowDown</span>
          <IconArrowDown style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconArchive />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconArchive</span>
          <IconArchive style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconApps />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconApps</span>
          <IconApps style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconAlipayCircle />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconAlipayCircle</span>
          <IconAlipayCircle style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconAlignRight />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconAlignRight</span>
          <IconAlignRight style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconAlignLeft />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconAlignLeft</span>
          <IconAlignLeft style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
      <CopyToClipboard message text="<IconAlignCenter />">
        <div className="yld-icon-demo-wrap-icon">
          <span style={{ padding: 13 }}>IconAlignCenter</span>
          <IconAlignCenter style={{ fontSize: 32 }} />
        </div>
      </CopyToClipboard>
    </div>
  );
};
```

## 设置大小和颜色

```jsx | reactExpand
import { Space } from '@yl-d/design';
import { IconAlipayCircle } from '@yl-d/icon';

export default () => {
  return (
    <Space>
      <IconAlipayCircle style={{ fontSize: 40, color: '#165dff' }} />
      <IconAlipayCircle style={{ fontSize: 30, color: '#16cdff' }} />
      <IconAlipayCircle style={{ fontSize: 20, color: '#ff7716' }} />
    </Space>
  );
};
```

## hover 属性

```jsx | reactExpand
import { IconAlipayCircle } from '@yl-d/icon';

export default () => {
  return <IconAlipayCircle style={{ fontSize: 20 }} hover />;
};
```
