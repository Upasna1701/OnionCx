<?php
/**
 * @license MIT
 *
 * Modified using {@see https://github.com/BrianHenryIE/strauss}.
 */

namespace KadenceWP\KadenceBlocks\Composer\Installers;

class CiviCrmInstaller extends BaseInstaller
{
    /** @var array<string, string> */
    protected $locations = array(
        'ext'    => 'ext/{$name}/'
    );
}
