import { world, system } from "@minecraft/server";

const objLightFeet = world.scoreboard.getObjective("detect:light_feet") ?? world.scoreboard.addObjective("detect:light_feet");
const objLightHead = world.scoreboard.getObjective("detect:light_head") ?? world.scoreboard.addObjective("detect:light_head");

const promiseMap = new WeakMap();
export function queryLightLevel(dimension, location) {
    return new Promise((resolve) => {
        try {
            const entity = dimension.spawnEntity("detect:light_level", location);
            promiseMap.set(entity, resolve);
        } catch { }
    });
}
world.afterEvents.dataDrivenEntityTrigger.subscribe((ev) => {
    let lightLevel;
    ev.getModifiers().forEach((d) => {
        d.addedComponentGroups.forEach((compGroup) => {
            if (compGroup.startsWith("light_level:")) {
                lightLevel = parseInt(compGroup.replace("light_level:", ""));
            }
        });
    });
    ev.entity.remove();
    promiseMap.get(ev.entity)?.(lightLevel);
}, { entityTypes: ["detect:light_level"] });

system.runInterval(async () => {
    for (const player of world.getAllPlayers()) {

        if (player.location.y <= 319 && player.location.y >= -64 && player.dimension.id === "minecraft:overworld") {
            const blockFeet = player.dimension.getBlock(player.location);
            const headLocation = { x: player.location.x, y: player.location.y + 1.0, z: player.location.z };
            const blockHead = player.dimension.getBlock(headLocation);
            if (blockFeet?.isValid === true && blockHead?.isValid === true) {
                const lightLevelFeet = await queryLightLevel(player.dimension, player.location);
                objLightFeet.setScore(player, lightLevelFeet);
                const lightLevelHead = await queryLightLevel(player.dimension, blockHead);
                objLightHead.setScore(player, lightLevelHead);
            }
        }
        if (player.location.y <= 127 && player.location.y >= 0 && player.dimension.id === "minecraft:nether") {
            const blockFeet = player.dimension.getBlock(player.location);
            const headLocation = { x: player.location.x, y: player.location.y + 1.0, z: player.location.z };
            const blockHead = player.dimension.getBlock(headLocation);
            if (blockFeet?.isValid === true && blockHead?.isValid === true) {
                const lightLevelFeet = await queryLightLevel(player.dimension, player.location);
                objLightFeet.setScore(player, lightLevelFeet);
                const lightLevelHead = await queryLightLevel(player.dimension, blockHead);
                objLightHead.setScore(player, lightLevelHead);
            }
        }
        if (player.location.y <= 255 && player.location.y >= 0 && player.dimension.id === "minecraft:the_end") {
            const blockFeet = player.dimension.getBlock(player.location);
            const headLocation = { x: player.location.x, y: player.location.y + 1.0, z: player.location.z };
            const blockHead = player.dimension.getBlock(headLocation);
            if (blockFeet?.isValid === true && blockHead?.isValid === true) {
                const lightLevelFeet = await queryLightLevel(player.dimension, player.location);
                objLightFeet.setScore(player, lightLevelFeet);
                const lightLevelHead = await queryLightLevel(player.dimension, blockHead);
                objLightHead.setScore(player, lightLevelHead);
            }
        }
    }
});
