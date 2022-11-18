/* eslint-disable @next/next/no-img-element */
import { Routes } from "@models/enums/routes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./projectText.module.scss";

function ProjectText(props: any) {
  return (
    <div className={styles.text}>
      <div className={styles.column}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          faucibus pulvinar elementum integer enim neque. Risus sed vulputate
          odio ut enim blandit volutpat maecenas. Sed vulputate odio ut enim
          blandit volutpat maecenas volutpat blandit. Mauris in aliquam sem
          fringilla ut morbi. Mauris vitae ultricies leo integer malesuada nunc
          vel risus commodo. Facilisis gravida neque convallis a cras semper
          auctor neque. Libero id faucibus nisl tincidunt eget nullam. Vitae
          aliquet nec ullamcorper sit amet risus nullam. Mi quis hendrerit dolor
          magna eget est lorem ipsum. Egestas diam in arcu cursus euismod quis
          viverra nibh. Vulputate ut pharetra sit amet. Mattis molestie a
          iaculis at. Tempus egestas sed sed risus pretium quam vulputate. Amet
          est placerat in egestas erat imperdiet sed euismod. Vitae congue
          mauris rhoncus aenean. Erat pellentesque adipiscing commodo elit at.
          In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Lectus
          magna fringilla urna porttitor rhoncus dolor purus non.
        </p>
        <p>
          Adipiscing vitae proin sagittis nisl rhoncus mattis. Adipiscing diam
          donec adipiscing tristique risus. Vel turpis nunc eget lorem dolor sed
          viverra. Nunc mattis enim ut tellus elementum. Viverra tellus in hac
          habitasse platea dictumst vestibulum. At augue eget arcu dictum varius
          duis. Vitae justo eget magna fermentum iaculis eu non diam. Gravida in
          fermentum et sollicitudin ac orci phasellus egestas tellus. Fermentum
          iaculis eu non diam phasellus. Sit amet volutpat consequat mauris nunc
          congue. Iaculis nunc sed augue lacus viverra vitae congue. At ultrices
          mi tempus imperdiet nulla malesuada pellentesque. Ullamcorper
          dignissim cras tincidunt lobortis. Hac habitasse platea dictumst
          quisque.
        </p>
        <p>
          Non enim praesent elementum facilisis leo vel. Pharetra convallis
          posuere morbi leo urna molestie at elementum. Quis varius quam quisque
          id diam vel quam. Quis vel eros donec ac odio tempor orci. Id diam vel
          quam elementum pulvinar. Pellentesque habitant morbi tristique
          senectus et netus et malesuada. Risus sed vulputate odio ut enim
          blandit volutpat maecenas volutpat. Bibendum neque egestas congue
          quisque egestas diam in arcu. Volutpat maecenas volutpat blandit
          aliquam etiam erat velit scelerisque in. Nisl pretium fusce id velit
          ut. Id consectetur purus ut faucibus pulvinar. Dui sapien eget mi
          proin sed libero.
        </p>
      </div>
      <div className={styles.column}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Id velit
          ut tortor pretium viverra suspendisse potenti nullam. In cursus turpis
          massa tincidunt dui. Ut eu sem integer vitae justo eget magna
          fermentum iaculis. Dolor morbi non arcu risus quis varius quam quisque
          id. Fermentum et sollicitudin ac orci phasellus. Interdum velit
          euismod in pellentesque massa placerat duis ultricies. Tellus in metus
          vulputate eu scelerisque felis imperdiet. Arcu non odio euismod
          lacinia at quis risus. Vitae congue eu consequat ac felis donec et
          odio pellentesque.
        </p>
        <p>
          Volutpat est velit egestas dui id ornare arcu. Volutpat consequat
          mauris nunc congue nisi vitae suscipit tellus mauris. Ornare massa
          eget egestas purus viverra accumsan in. Maecenas sed enim ut sem
          viverra aliquet eget sit amet. Facilisis gravida neque convallis a
          cras semper auctor neque. Sagittis orci a scelerisque purus. Nunc
          scelerisque viverra mauris in aliquam sem. Sapien nec sagittis aliquam
          malesuada bibendum arcu. Urna molestie at elementum eu. Commodo elit
          at imperdiet dui accumsan sit amet nulla. Pellentesque adipiscing
          commodo elit at imperdiet dui. Egestas tellus rutrum tellus
          pellentesque eu tincidunt tortor aliquam nulla. Ut eu sem integer
          vitae justo eget magna. Amet aliquam id diam maecenas ultricies mi
          eget mauris pharetra. Purus sit amet volutpat consequat mauris nunc
          congue nisi. Habitant morbi tristique senectus et netus et malesuada
          fames ac.
        </p>
      </div>
    </div>
  );
}

export default ProjectText;
