# Detect Light Levels

This behavior pack uses scripts and an entity to detect the light level at players' feet and head. Assigns light level to a scoreboard value so you can use the scores target selector argument in your own commands.

## Installing the pack:

You may dowload the latest release from the [Releases Page](https://github.com/mittens4all/Detect-Light-Level/releases)

Add the Detect Light levels add-on to your behavior packs on your world. Behavior packs may disable achievements, but editing the world with an NBT editor can re-enable achievements when uploading your world to a realm.

Re-enable achievements on either pc or mobile with the free NBT editor [Dovetail](https://github.com/Offroaders123/Dovetail)

## How to Use

There are two scoreboard objectives:
`detect:light_feet`
`detect:light_head`

You can target players using the scores selector argument in your commands:

```yaml
# Target players who have a light level of 15 at their head
execute as @a[scores={detect:light_head=15}] run <command>
```

```yaml
# Target players who have a light level of 4 or less at both their head and feet
execute as @a[scores={detect:light_head=..4, detect:light_feet=..4}] run <command>
```

```yaml
# Titleraw Actionbar
titleraw @a actionbar {"rawtext":[{"text":"Light Head: "}, {"score":{"name":"*","objective":"detect:light_head"}}, {"text":"\nLight Feet: "}, {"score":{"name":"*","objective":"detect:light_feet"}}]}
```

## Author

- [@mittens4all](https://www.github.com/mittens4all) \\ Created pack and added scoreboard scripts
- [Youtube](https://www.youtube.com/@mittens4all)

## Gratitudes

- [Bedrock Add-Ons Discord](https://discord.gg/46JUdQb)
- [vprufus7](https://discord.com/channels/523663022053392405/1306499809451966514) \\ Created scipt resource post and entity

```js
       _                              _     _       _ _  
      (_)  _     _                   | |   | |     | | | 
 ____  _ _| |_ _| |_ _____ ____   ___| |___| |_____| | | 
|    \| (_   _|_   _) ___ |  _ \ /___)_____  (____ | | | 
| | | | | | |_  | |_| ____| | | |___ |     | / ___ | | | 
|_|_|_|_|  \__)  \__)_____)_| |_(___/      |_\_____|\_)_)
                                                         
```