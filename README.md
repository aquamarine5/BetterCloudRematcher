# BetterCloudRematcher

[![wakatime](https://wakatime.com/badge/user/55ef6b7f-91f7-434b-a743-74ba0005afc1/project/0487205c-e113-4551-85fc-bf589e2eb657.svg)](https://wakatime.com/badge/user/55ef6b7f-91f7-434b-a743-74ba0005afc1/project/0487205c-e113-4551-85fc-bf589e2eb657)

## 作者其他的BetterNCM插件

- [BetterListenCount](https://github.com/aquamarine5/BetterListenCount) 批量查询歌单内歌曲播放次数
- [BetterCloudSearch](https://github.com/aquamarine5/BetterCloudSearch) 直接在搜索页搜索云盘音乐而不用再去云盘进行搜索

## 功能

- 右击无版权音乐（当歌曲无评论权限时视为无版权或版权限制音乐）会自动搜索云盘内包含歌名的音频文件
- 点击搜索结果即可自动匹配绑定
- 云盘搜索依赖于[BetterCloudSearch](https://github.com/aquamarine5/BetterCloudSearch)

> [!WARNING]
> 周杰伦等歌手的音乐可能不适用。

## 实现

- `rematcher_rematch(songId: number, adjustSongId: number)`:

```js
NEJ.P("nej.j").Ru(
    "".concat(APP_CONF.domain, "/api/cloud/user/song/match"),
    {
        type: "json",
        query: {
            userId: localCache.Du("host.profile.userId"),
            songId: songId,
            adjustSongId: adjustedSongId
        },
        onload: onloadCallback,
        onerror: onerrorCallback
    }
)
```
