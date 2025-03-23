/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 import React, {type ReactNode} from 'react';

 type ProfileProps = {
   className?: string;
   name: string;
   children: ReactNode;
   githubUrl: string;
   biliUrl?: string;
   qqUrl: string;
 };

 function TeamProfileCard({
   className,
   name,
   children,
   githubUrl,
   biliUrl,
   qqUrl,
 }: ProfileProps) {
   return (
     <div className={className}>
       <div className="card card--full-height">
         <div className="card__header">
           <div className="avatar avatar--vertical">
             <img
               className="avatar__photo avatar__photo--xl"
               src={`/static/img/.jpg`}
               alt={`${name}'s avatar`}
             />
             <div className="avatar__intro">
               <h3 className="avatar__name">{name}</h3>
             </div>
           </div>
         </div>
         <div className="card__body">{children}</div>
         <div className="card__footer">
           <div className="button-group button-group--block">
             {githubUrl && (
               <a className="button button--secondary" href={githubUrl}>
                 GitHub
               </a>
             )}
             {biliUrl && (
               <a className="button button--secondary" href={biliUrl}>
                 哔哩哔哩
               </a>
             )}
             {qqUrl && (
               <a className="button button--secondary" href={qqUrl}>
                 QQ
               </a>
             )}
           </div>
         </div>
       </div>
     </div>
   );
 }

 function TeamProfileCardCol(props: ProfileProps) {
   return (
     <TeamProfileCard {...props} className="col col--6 margin-bottom--lg" />
   );
 }

 export default function TeamRow(): JSX.Element {
   return (
     <div className="row">
       <TeamProfileCardCol
         name="Mika~"
         qqUrl="http://wpa.qq.com/msgrd?v=3&amp;uin=3293972621&amp;site=qq&amp;menu=yes">
            纯月 Puremoon 下载站前站长/企划创始人，同时也是旧站（1.0）的主要维护者。因为某些原因永远地离开了下载站。
       </TeamProfileCardCol>
       <TeamProfileCardCol
         name="Rsplwe"
         githubUrl="https://github.com/Rsplwe"
         biliUrl="https://space.bilibili.com/44974083">
            微光 Lowlight 企划的主要技术支持，为下载站带来的贡献不知道比站长本人高到哪里去了（
       </TeamProfileCardCol>
       <TeamProfileCardCol
         name="ForteEXE"
         githubUrl="https://github.com/ForteEXE">
            下载站重要维护者之一，站长早上八点起不了床的时候都是这位负责 Arcaea 的更新。
       </TeamProfileCardCol>
     </div>
   );
 }
